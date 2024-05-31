import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { SectionListComponent } from './section-list/section-list.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DeleteConformComponent } from './delete-conform/delete-conform.component';
// import { SectionListComponent } from './task/section-list/section-list.component';
// import { AddSectionComponent } from './task/add-section/add-section.component';
// import { AddTaskComponent } from './task/add-task/add-task.component';


@NgModule({
  declarations: [
    SectionListComponent,
    AddSectionComponent,
    AddTaskComponent,
    DeleteConformComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule.forRoot({ // ToastrModule added
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ]
})
export class TaskModule { }
