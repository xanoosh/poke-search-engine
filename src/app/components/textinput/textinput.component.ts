import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface GlobalDataState {
  searchValue: string;
}

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss'],
})
export class TextinputComponent implements OnInit {
  placeholder: string = 'Search by name or id';

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onChange(val: string) {
    this.store.dispatch({ type: val });
  }
}
