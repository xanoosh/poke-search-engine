import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'placeholder title';
  @Input() pxSize: string = '20px';
  constructor() {}

  ngOnInit(): void {}
}
