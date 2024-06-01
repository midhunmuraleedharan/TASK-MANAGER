// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit-section',
//   templateUrl: './edit-section.component.html',
//   styleUrls: ['./edit-section.component.scss']
// })
// export class EditSectionComponent {

// }

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { storageService } from 'src/app/services/storage.service';
import { Priority, Section } from '../models';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent {
  public title: string;
  public priority: Priority;
  public priorities = ['HIGH', 'LOW', 'NORMAL'];

  constructor(
    private storageService: storageService,
    private dialogRef: MatDialogRef<EditSectionComponent>,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: { section: Section }
  ) {
    this.title = data.section.title;
    this.priority = data.section.priority;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.storageService.updateSection(this.data.section.id, this.title, this.priority);
    this.toastr.success('Section Updated Successfully');
    this.cancel();
  }
}
