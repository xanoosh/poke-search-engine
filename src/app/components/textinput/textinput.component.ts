import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss'],
})
export class TextinputComponent implements OnInit {
  placeholder: string = 'Search by name or id';
  @Output() inputChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onChange() {
    this.inputChange.emit();
  }
}
