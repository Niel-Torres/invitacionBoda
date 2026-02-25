import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/invitation-data.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-bride-groom',
  templateUrl: './contact-bride-groom.component.html',
  styleUrls: ['./contact-bride-groom.component.scss'],
})
export class ContactBrideGroomComponent implements OnInit {

  @Input() person1!: Person;
  @Input() person2!: Person;
  @Input() whatsappMessage!: string;

  constructor() { }

  ngOnInit() {}

  gotoWhatsapp(phone?: string) {
    const urlApiWhatsapp = environment.urlApiWhatsapp;
    const encodedMessage = encodeURIComponent(this.whatsappMessage);

    if (phone) {
      const url = `${urlApiWhatsapp}${phone}&text=${encodedMessage}`;
      window.open(url, '_blank');
    }
  }
}
