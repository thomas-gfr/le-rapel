import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
    @Input() public label: string = '';
    @Input() public placeholder: string = '';

}
