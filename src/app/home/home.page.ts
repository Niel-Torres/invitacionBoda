import { Component, OnInit } from '@angular/core';
import { InvitationDataService } from '../services/invitation-data.service';
import { InvitationData } from '../interfaces/invitation-data.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  invitationData: InvitationData | null = null;
  showArrow = true;

  constructor(private invitationDataService: InvitationDataService) {}

  ngOnInit(): void {
    this.invitationDataService.getInvitationData().subscribe(data => {
      this.invitationData = data;
    });
  }

  onScroll(event: any): void {
    const scrollTop = event.detail.scrollTop;
    const maxScrollTop = 6300;
    this.showArrow = scrollTop < maxScrollTop;
  }
}
