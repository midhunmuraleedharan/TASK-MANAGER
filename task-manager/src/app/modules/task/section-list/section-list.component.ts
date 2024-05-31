import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Priority, Section } from '../models';
import { storageService } from 'src/app/services/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSectionComponent } from '../add-section/add-section.component';
@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss'],
})
export class SectionListComponent {
  constructor(private dialog: MatDialog) { }

  openAddSectionModal(): void {
    const dialogRef = this.dialog.open(AddSectionComponent, {
      width: '400px' // Adjust width as needed
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      // Handle the result from the modal
      if (result) {
        // Perform any actions with the returned section object
        console.log('New Section:', result);
        // Call a method to add the section to your data or perform other actions
      }
    });
  }

  // sections: Section[] = [];

  // constructor(private storageService: storageService) {
  //   this.sections = this.storageService.getSections();
  // }

  // addSection(title: string, priority: Priority): void {
  //   this.storageService.addSection(title, priority);
  //   this.sections = this.storageService.getSections();
  // }

}
