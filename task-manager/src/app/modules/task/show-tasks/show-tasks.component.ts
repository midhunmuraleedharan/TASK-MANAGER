import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from '../models';
import { storageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.scss']
})
export class ShowTasksComponent implements OnInit {
  sectionid: string;
  tasks: Task[] = [];

  constructor(private storageService: storageService, public dialogRef: MatDialogRef<ShowTasksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.sectionid = data.sectionId }

  ngOnInit(): void {
    this.fetchTasks();

  }

  fetchTasks() {
    const taskInLocal = this.storageService.getTasks();
    this.filterTasksBySectionId(taskInLocal, this.sectionid)
  }

  filterTasksBySectionId(tasks: Task[], sectionId: string) {
    this.tasks = tasks.filter(task => task.sectionId === sectionId);
    console.log(this.tasks, "this.tasks");

  }


  onTaskDropped(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  // closeDialog(): void {
  //   this.dialogRef.close();
  // }
}
