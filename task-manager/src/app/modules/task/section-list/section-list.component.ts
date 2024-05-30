import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Priority, Section } from '../models';
import { storageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss'],
})
export class SectionListComponent {

  sections: Section[] = [];

  constructor(private storageService: storageService) {
    this.sections = this.storageService.getSections();
  }

  addSection(title: string, priority: Priority): void {
    this.storageService.addSection(title, priority);
    this.sections = this.storageService.getSections();
  }

}
