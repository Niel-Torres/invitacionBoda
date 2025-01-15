import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvitationDataService {

  data: any;

  constructor(
    private http: HttpClient
  ) { }

  getInvitationData(){
    this.data = this.http.get('assets/mocks/my-invitation-data.json');
    return this.data;
  }

  getBlockById(id: string) {
    return this.data.blocks.find((block: any) => block.id === id);
  }
}
