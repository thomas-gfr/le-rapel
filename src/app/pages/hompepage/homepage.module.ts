import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HompepageComponent } from './hompepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';


@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomepageRoutingModule
    ],
    declarations: [
        HompepageComponent,
    ]
})
export class HomepageModule { }
