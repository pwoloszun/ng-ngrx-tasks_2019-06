import { Component, Input } from '@angular/core';

@Component({
  selector: 'nts-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.css']
})
export class StatusModalComponent {

  @Input() messages: string[];

  hasMessages() {
    return this.messages && this.messages.length > 0;
  }

}
