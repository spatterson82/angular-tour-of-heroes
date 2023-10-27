import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  // Bind service to component
  // Needs to be public if binding the property inside HTML
  constructor(public messageService: MessageService) {

  }
}
 