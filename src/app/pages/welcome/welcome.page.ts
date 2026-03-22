import { Component, OnInit } from '@angular/core';
import { InvitationDataService } from '../../services/invitation-data.service';
import { InvitationData } from '../../interfaces/invitation-data.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  invitationData: InvitationData | null = null;

  constructor(private invitationDataService: InvitationDataService) {}

  ngOnInit(): void {
    this.invitationDataService.getInvitationData().subscribe(data => {
      this.invitationData = data;
    });
  }

}
