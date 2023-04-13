import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
    @Input() public options: string[] = [];
    @Input() public label: string = 'default';
    @Input() public placeholder: string = '';

}
