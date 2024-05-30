import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { SectionListComponent } from './task/section-list/section-list.component';
import { AddSectionComponent } from './task/add-section/add-section.component';
import { AddTaskComponent } from './task/add-task/add-task.component';


@NgModule({
  declarations: [
    SectionListComponent,
    AddSectionComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
