import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  searchBarValue: string = '';
  pokeData: any;
  searchBarChange: (val: any) => void = (val) => {
    this.searchBarValue = val;
    console.log(this.searchBarValue);
  };
  searchBarClick: () => void = () => console.log('clicked');
  constructor(private http: HttpClient) {}
  getApiData() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/1`).subscribe((res) => {
      this.pokeData = res;
    });
  }
  ngOnInit(): void {}
}
