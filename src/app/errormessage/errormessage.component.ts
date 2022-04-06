import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errormessage',
  templateUrl: './errormessage.component.html',
  styleUrls: ['./errormessage.component.scss'],
})
export class ErrormessageComponent implements OnInit {
  constructor() {}
  @Input() errorMessage: string = '';
  ngOnInit(): void {}
}
