import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompepageComponent } from './hompepage.component';

const ROUTE: Routes = [
    {
        path: '',
        component: HompepageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTE)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
