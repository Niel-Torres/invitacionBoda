import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  setOpen(boolean: boolean){
    console.log("push");
  }



}
