import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Priority, Section, Task } from '../models';
import { storageService } from 'src/app/services/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSectionComponent } from '../add-section/add-section.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { DeleteConformComponent } from '../delete-conform/delete-conform.component';
import { ShowTasksComponent } from '../show-tasks/show-tasks.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { EditSectionComponent } from '../edit-section/edit-section.component';
import { ToastrService } from 'ngx-toastr';
// import { DeleteConformComponent } from '../delete-conform/delete-conform.component';
@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss'],
})
export class SectionListComponent implements OnInit {
  sections: Section[] = [];
  task: Task[] = [];
  constructor(private dialog: MatDialog, private storageService: storageService, private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.fetchSections()
    this.fetchTasks();
  }

  // fetchSections() {
  //   this.sections = this.storageService.getSections();
  // }

  fetchSections() {
    this.storageService.sections$.subscribe(sections => {
      this.sections = this.sortSections(sections);
    });
  }

  fetchTasks() {
    this.task = this.storageService.getTasks();
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sections, event.previousIndex, event.currentIndex);
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'HIGH':
        return 'priority-high';
      case 'NORMAL':
        return 'priority-normal';
      case 'LOW':
        return 'priority-low';
      default:
        return '';
    }
  }

  getPriorityValue(priority: Priority): number {
    switch (priority) {
      case 'HIGH': return 3;
      case 'NORMAL': return 2;
      case 'LOW': return 1;
      default: return 0;
    }
  }

  sortSections(sections: Section[]): Section[] {
    return sections.sort((a, b) => {
      if (a.priority === b.priority) {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      return this.getPriorityValue(b.priority) - this.getPriorityValue(a.priority);
    });
  }

  openEditSectionModal(section: Section): void {
    const dialogRef = this.dialog.open(EditSectionComponent, {
      width: '400px',
      data: { section }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Edited Section:', result);
      }
    });
  }

  completeSection(sectionId: string): void {
    this.toastr.success("compleated")

  }

}
