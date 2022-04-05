import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface GlobalDataState {
  searchValue: string;
}
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  searchBarValue$: Observable<string>;
  pokeData: any;
  searchBarValue: string = '';
  constructor(private store: Store<GlobalDataState>, private http: HttpClient) {
    this.searchBarValue$ = this.store.select('searchValue');
  }

  getApiData() {
    this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${this.searchBarValue}`)
      .subscribe((res) => {
        this.pokeData = res;
      });
  }
  ngOnInit(): void {
    this.store
      .select('searchValue')
      .subscribe((searchBarValue) => (this.searchBarValue = searchBarValue));
  }
}
