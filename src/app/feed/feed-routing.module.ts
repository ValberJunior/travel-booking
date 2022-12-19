import { UserAreaComponent } from './user-area/user-area.component';
import { ListResolver } from './list/list.resolver';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component: ListComponent,
    resolve:{
      list: ListResolver
    }
  },
  {
    path:"user-area",
    component: UserAreaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
