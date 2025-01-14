import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HomePage } from './home/home.page';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ContactBrideGroomComponent } from './components/contact-bride-groom/contact-bride-groom.component';
import { Bloque1PortadaComponent } from './components/bloque1-portada/bloque1-portada.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { Bloque2Portada2Component } from './components/bloque2-portada2/bloque2-portada2.component';
import { BloqueIglesiaComponent } from './components/bloque-iglesia/bloque-iglesia.component';
import { BloqueCeremoniaComponent } from './components/bloque-ceremonia/bloque-ceremonia.component';
import { BloqueCelebracionDetalleComponent } from './components/bloque-celebracion-detalle/bloque-celebracion-detalle.component';
import { BloqueGaleriaFotosComponent } from './components/bloque-galeria-fotos/bloque-galeria-fotos.component';
import { BloqueConfirmarAsistenciaWhatsappComponent } from './components/bloque-confirmar-asistencia-whatsapp/bloque-confirmar-asistencia-whatsapp.component';
import { BloqueHotelesComponent } from './components/bloque-hoteles/bloque-hoteles.component';
import { BloqueCompartirRedesSocialesComponent } from './components/bloque-compartir-redes-sociales/bloque-compartir-redes-sociales.component';
import { BloqueFraseAgradecimientosComponent } from './components/bloque-frase-agradecimientos/bloque-frase-agradecimientos.component';
import { CountdownFechaComponent } from './components/countdown-fecha/countdown-fecha.component';
import { FadeInOnScrollDirective } from './directives/fade-in-on-scroll.directive';
import { TextTypewriterDirective } from './directives/text-typewriter.directive';
import { FadeInWithMoveDirective } from './directives/fade-in-with-move.directive';
import { FadeInProgressiveDirective } from './directive directives/fade-in-progressive.directive';


@NgModule({
  declarations: [
    AppComponent, 
    HomePage,
    CarruselComponent,
    ContactBrideGroomComponent, 
    Bloque1PortadaComponent,
    SeparatorComponent,
    Bloque2Portada2Component,
    BloqueIglesiaComponent,
    BloqueCeremoniaComponent,
    BloqueCelebracionDetalleComponent,
    BloqueGaleriaFotosComponent,
    BloqueConfirmarAsistenciaWhatsappComponent,
    BloqueHotelesComponent,
    BloqueCompartirRedesSocialesComponent,
    BloqueFraseAgradecimientosComponent,
    CountdownFechaComponent,
    FadeInOnScrollDirective,
    TextTypewriterDirective,
    FadeInWithMoveDirective,
    FadeInProgressiveDirective
  ],
  exports: [FadeInOnScrollDirective, TextTypewriterDirective],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
