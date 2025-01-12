import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InvitationDataService } from 'src/app/services/invitation-data.service';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss'],
})
export class SeparatorComponent  implements OnInit {
  @Input() isSeparadorSimple!: boolean;
 // @Input() textoSeparador!: string;
 @Input() textoSeparador: string = ''; 

  invitationData: any;


  constructor(
    private invitationDataService: InvitationDataService
  ) { }

  ngOnInit() {
    this.getInvitationData();
  }

  ngOnChanges() {
    console.log('isSeparadorSimple:', this.isSeparadorSimple);
    console.log('textoSeparador:', this.textoSeparador);
  }

  getInvitationData(){
    this.invitationDataService.getInvitationData()
      .subscribe(
        (data: any) => {
          this.invitationData = data;
          console.log(this.invitationData);
        }
      )
  }

  // fetchBlock(id: string) {
  //   const block = this.invitationDataService.getBlockById(id);
  //   this.blockSelected.emit(block);
  // }

}
