import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';

// Module de componentes compartidos
import { ComponentsModule } from '@components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [WelcomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomePageModule { }
