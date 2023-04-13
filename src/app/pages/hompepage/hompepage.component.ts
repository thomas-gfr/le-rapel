import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hompepage',
  templateUrl: './hompepage.component.html',
  styleUrls: ['./hompepage.component.scss']
})
export class HompepageComponent implements OnInit {

    public bActif = true;
    constructor() { }

    ngOnInit(): void {
    }

}
