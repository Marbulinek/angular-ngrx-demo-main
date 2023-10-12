import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import getCounter from '../state/counter.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterOutputComponent implements OnInit {
  
  // counter: number|any;
  counter$: Observable<number> = of();

  constructor(private store: Store<AppState>)
  {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }

}
