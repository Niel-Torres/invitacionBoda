import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvitationData } from '@interfaces/invitation-data.interface';

@Component({
  selector: 'app-entrada-bienvenida-babyshower',
  templateUrl: './entrada-bienvenida-babyshower.component.html',
  styleUrls: ['./entrada-bienvenida-babyshower.component.scss'],
})
export class EntradaBienvenidaBabyshowerComponent implements OnInit {

  @Input() data: InvitationData | null = null;

  isOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  openEnvelope(): void {
    if (this.isOpen) return;
    this.isOpen = true;
    setTimeout(() => {
      this.router.navigate(['/tu-invitacion']);
    }, 4500);
  }
}
