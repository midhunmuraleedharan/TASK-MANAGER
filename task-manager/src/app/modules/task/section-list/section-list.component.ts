import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Priority, Section, Task } from '../models';
import { storageService } from 'src/app/services/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSectionComponent } from '../add-section/add-section.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { DeleteConformComponent } from '../delete-conform/delete-conform.component';
import { ShowTasksComponent } from '../show-tasks/show-tasks.component';
// import { DeleteConformComponent } from '../delete-conform/delete-conform.component';
@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss'],
})
export class SectionListComponent implements OnInit {
  sections: Section[] = [];
  constructor(private dialog: MatDialog, private storageService: storageService) {

  }
  ngOnInit(): void {
    this.fetchSections()
  }

  fetchSections() {
    this.sections = this.storageService.getSections();
  }

  openAddSectionModal(): void {
    const dialogRef = this.dialog.open(AddSectionComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('New Section:', result);
      }
    });
  }

  openAddTaskModal(): void {
    const dialogRef = this.dialog.open(AddTaskComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('New Task:', result);
      }
    });
  }

  confirmDelete(sectionId: string): void {
    const dialogRef = this.dialog.open(DeleteConformComponent, {
      width: '300px',
      data: { sectionId: sectionId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result, "result", result.ssectionId);
        this.deleteSection(sectionId);
      }
    });
  }

  deleteSection(sectionId: string): void {
    this.storageService.deleteSection(sectionId);
    const storedSections = localStorage.getItem('sections');
    if (storedSections) {
      this.sections = JSON.parse(storedSections);
    }
  }


  openTasksModal(sectionId: string): void {
    this.dialog.open(ShowTasksComponent, {
      width: '80%',
      height: '80%',
      data: { sectionId: sectionId }
    });
  }

}
