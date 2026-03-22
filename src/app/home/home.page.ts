import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { InvitationDataService } from '../services/invitation-data.service';
import { InvitationData } from '../interfaces/invitation-data.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;

  invitationData: InvitationData | null = null;
  showArrow = true;

  constructor(private invitationDataService: InvitationDataService) {}

  ngOnInit(): void {
    this.invitationDataService.getInvitationData().subscribe(data => {
      this.invitationData = data;
    });
  }

  async onScroll(event: any): Promise<void> {
    const scrollEl = await this.content.getScrollElement();
    const nearBottom = event.detail.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 60;
    this.showArrow = !nearBottom;
  }
}
