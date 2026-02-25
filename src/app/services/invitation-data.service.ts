import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvitationData } from '../interfaces/invitation-data.interface';

@Injectable({
  providedIn: 'root'
})
export class InvitationDataService {

  constructor(
    private http: HttpClient
  ) { }

  getInvitationData(): Observable<InvitationData> {
    return this.http.get<InvitationData>('assets/mocks/my-invitation-data.json');
  }
}
