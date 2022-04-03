import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  searchBarChange: (val: any) => void = (val) => console.log(val);
  searchBarClick: () => void = () => console.log('clicked');

  constructor() {}

  ngOnInit(): void {}
}
