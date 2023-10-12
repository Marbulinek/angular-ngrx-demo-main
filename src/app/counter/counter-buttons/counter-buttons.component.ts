import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterButtonsComponent {
  constructor(private store: Store<AppState>) {}

  onIncrement(): void {
    this.store.dispatch(increment());
  }

  onDecrement(): void {
    this.store.dispatch(decrement());
  }

  onReset(): void {
    this.store.dispatch(reset());
  }
}
