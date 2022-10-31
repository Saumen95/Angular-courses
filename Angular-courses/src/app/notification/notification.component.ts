import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div>
    <p> This website uses cookies to enhance your experience.</p>
      </div > `,
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
