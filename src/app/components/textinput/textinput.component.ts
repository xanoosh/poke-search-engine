import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss'],
})
export class TextinputComponent implements OnInit {
  placeholder: string = 'Search by name or id';

  constructor() {}

  ngOnInit(): void {}

  onChange(val: string) {
    console.log(val);
  }
}
