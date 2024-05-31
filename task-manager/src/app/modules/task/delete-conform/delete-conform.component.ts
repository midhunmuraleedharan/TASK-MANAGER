import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-conform',
  templateUrl: './delete-conform.component.html',
  styleUrls: ['./delete-conform.component.scss']
})
export class DeleteConformComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteConformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
