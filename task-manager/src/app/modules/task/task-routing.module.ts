import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionListComponent } from './section-list/section-list.component';
// import { SectionListComponent } from './task/section-list/section-list.component';
// import { SectionListComponent } from './task/section-list/section-list.component';
// import { SectionListComponent } from './../../../app/modules/task/task/section-list/section-list.component';

const routes: Routes = [
  {
    path: '',
    component: SectionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
