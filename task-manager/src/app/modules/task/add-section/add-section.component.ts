import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
// import { Priority } from '../models/priority.enum';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent {
  public title: string = '';
  public Priority: any;
  public priorities = ['HIGH', 'LOW', 'NORMAL']

  constructor(private dialogRef: MatDialogRef<AddSectionComponent>) { }

  cancel(): void {
    this.dialogRef.close();
  }

  // save(): void {
  //   const section = {
  //     title: this.title,
  //     priority: this.priority
  //   };
  //   // Emit the section object to the parent component
  //   this.dialogRef.close(section);
  // }
}
