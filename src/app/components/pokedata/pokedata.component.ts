import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokedata',
  templateUrl: './pokedata.component.html',
  styleUrls: ['./pokedata.component.scss'],
})
export class PokedataComponent implements OnInit {
  @Input() pokeData: any = { name: '', sprites: [], stats: [] };
  constructor() {}

  ngOnInit(): void {}
}
