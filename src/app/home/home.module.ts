import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ModalComponent } from '../components/modal/modal.component';
import { CarruselComponent } from '../components/carrusel/carrusel.component';
import { ContactBrideGroomComponent } from '../components/contact-bride-groom/contact-bride-groom.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    ModalComponent, 
    CarruselComponent,
    ContactBrideGroomComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class HomePageModule {}
