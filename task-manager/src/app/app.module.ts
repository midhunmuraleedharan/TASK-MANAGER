import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ShowTasksComponent } from './modules/task/show-tasks/show-tasks.component';
import { SharedModule } from './modules/shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    SharedModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    ToastrModule.forRoot({ // ToastrModule added
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
