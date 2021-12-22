import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass'],
})
export class PopupComponent implements OnInit {
  @Input() email: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.email);
  }
}
