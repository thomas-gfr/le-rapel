import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, tap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnDestroy {
    @Input() label: string =''

    @Output() public emitOnClick = new EventEmitter<Event>();

    private _click$ = new Subject<Event>();
    private _sub: Subscription = new Subscription();

    public ngOnInit(): void {
        this._sub = this._click$
            .pipe(
                throttleTime(700),
                tap((event) => this.emitOnClick.emit(event))
            )
            .subscribe();
    }

    public ngOnDestroy(): void {
        if (this._sub) this._sub.unsubscribe();
    }
}
