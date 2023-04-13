import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectedLayoutComponent } from './connected-layout.component';

const routes: Routes = [
    { 
        path: '',
        component: ConnectedLayoutComponent,
        children: [
            { path: 'home', loadChildren: () => import('../../pages/hompepage/homepage.module').then(m => m.HomepageModule) },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectedLayoutRoutingModule { }
