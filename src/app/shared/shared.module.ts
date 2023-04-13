import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { DropdownComponent } from './components/input/dropdown/dropdown.component';
import { TextComponent } from './components/input/text/text.component';
import { ButtonComponent } from './components/button/button.component';
import { CalendarOutComponent } from './components/calendar-out/calendar-out.component';

const COMPONENTS = [
    NavbarComponent,
    TextComponent,
    DropdownComponent,
    ButtonComponent,
    CalendarOutComponent
];

const PIPES = [
];

const DIRECTIVES = [
];

const PRIMENG = [
    MenubarModule,
    DropdownModule,
    InputTextModule,
    ButtonModule
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    ...PRIMENG,
  ],
  providers: [
    // ...PIPES,
    DatePipe,
    CurrencyPipe,
  ],
  declarations: [...COMPONENTS,
    //  ...PIPES, ...DIRECTIVES
    ],
  exports: [...COMPONENTS, 
    // ...PIPES, ...DIRECTIVES, 
    ...PRIMENG]
})
export class SharedModule { }


