import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { storageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent {
  public title: string = '';
  public Priority: any;
  public priorities = ['HIGH', 'LOW', 'NORMAL']

  constructor(private storageService: storageService, private dialogRef: MatDialogRef<AddSectionComponent>, private toastr: ToastrService) { }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    const section = {
      title: this.title,
      priority: this.Priority
    };
    console.log(this.title, this.Priority, "this.title, this.Priority");

    this.storageService.addSection(this.title, this.Priority);
    this.toastr.info("Section Created Successfully");
    this.cancel()
  }
}
