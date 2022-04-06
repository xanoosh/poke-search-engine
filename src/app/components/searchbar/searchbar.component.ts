import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalDataState } from '../../interfaces';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  searchBarValue$: Observable<string>;
  pokeDataResult: any;
  errorMessage: string = '';
  searchBarValue: string = '';
  constructor(private store: Store<GlobalDataState>, private http: HttpClient) {
    this.searchBarValue$ = this.store.select('searchValue');
  }

  getApiData(e?: Event) {
    if (e) e.preventDefault();
    this.errorMessage = '';
    this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${this.searchBarValue}`)
      .subscribe(
        (res) => {
          this.pokeDataResult = res;
        },
        (err) => {
          if (err.status === 404) {
            //ask for correct name/id
            this.errorMessage = `possible typo. try retyping name or enter value between 1 and 898`;
          } else {
            this.errorMessage = `something went wrong. try again later`;
            // main err message (sth went wrong etc)
          }
        }
      );
  }
  ngOnInit(): void {
    this.store
      .select('searchValue')
      .subscribe((searchBarValue) => (this.searchBarValue = searchBarValue));
  }
}
