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
import { ShowTasksComponent } from './show-tasks/show-tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared.module';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';


// import { SectionListComponent } from './task/section-list/section-list.component';
// import { AddSectionComponent } from './task/add-section/add-section.component';
// import { AddTaskComponent } from './task/add-task/add-task.component';


@NgModule({
  declarations: [
    SectionListComponent,
    AddSectionComponent,
    AddTaskComponent,
    DeleteConformComponent,
    ShowTasksComponent,
    EditSectionComponent,
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
    DragDropModule,
    SharedModule,
    MatTooltipModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    ToastrModule.forRoot({ // ToastrModule added
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ]
})
export class TaskModule { }
