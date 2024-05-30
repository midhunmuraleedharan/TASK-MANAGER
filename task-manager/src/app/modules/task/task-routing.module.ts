import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionListComponent } from '../task/task/section-list/section-list.component';

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
