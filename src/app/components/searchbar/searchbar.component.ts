import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  searchBarValue: string = '';
  searchBarChange: (val: any) => void = (val) => {
    this.searchBarValue = val;
    console.log(this.searchBarValue);
  };
  searchBarClick: () => void = () => console.log('clicked');
  data: any;
  constructor(private http: HttpClient) {}
  getPokemonData() {
    this.data = this.http.get(
      `https://pokeapi.co/api/v2/pokemon/${this.searchBarValue}`
    );
    console.log(this.data);
  }
  ngOnInit(): void {}
}
