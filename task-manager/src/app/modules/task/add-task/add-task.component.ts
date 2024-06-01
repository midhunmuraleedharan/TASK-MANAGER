import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';
import { Priority, Section, Task } from '../models';
import { storageService } from 'src/app/services/storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;
  priorityOptions = Object.values(Priority);
  public sections: Section[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddTaskComponent>,
    private storageService: storageService,
    private toasterService: ToastrService
  ) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      section: ['', Validators.required],
      description: [''],
      dueDate: [null],
      priority: [Priority.Normal, Validators.required]
    });

    this.getAvailableSections();

  }

  getAvailableSections() {
    this.sections = this.storageService.getSections()
    console.log(this.sections, "this.sections");
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: uuidv4(),
        sectionId: this.taskForm.value.section,
        name: this.taskForm.value.name,
        description: this.taskForm.value.description,
        dueDate: this.taskForm.value.dueDate,
        priority: this.taskForm.value.priority,
        createdAt: new Date()
      };

      this.storageService.addTask(newTask);
      this.toasterService.success('Task Added Successfully')
      console.log(newTask, "newTask");

      this.dialogRef.close(newTask);
    }
  }
}
