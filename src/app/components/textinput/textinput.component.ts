import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalDataState } from '../../interfaces';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss'],
})
export class TextinputComponent implements OnInit {
  placeholder: string = 'Search by name or id';

  constructor(private store: Store<GlobalDataState>) {}

  ngOnInit(): void {}

  onChange(val: string) {
    this.store.dispatch({ type: val });
  }
}
