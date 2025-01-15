import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

// Componentes
import { Bloque1PortadaComponent } from '@components/bloque1-portada/bloque1-portada.component';
import { SeparatorComponent } from '@components/separator/separator.component';
import { Bloque2Portada2Component } from '@components/bloque2-portada2/bloque2-portada2.component';
import { BloqueIglesiaComponent } from '@components/bloque-iglesia/bloque-iglesia.component';
import { BloqueCeremoniaComponent } from '@components/bloque-ceremonia/bloque-ceremonia.component';
import { BloqueCelebracionDetalleComponent } from '@components/bloque-celebracion-detalle/bloque-celebracion-detalle.component';
import { BloqueCompartirRedesSocialesComponent } from '@components/bloque-compartir-redes-sociales/bloque-compartir-redes-sociales.component';
import { BloqueFraseAgradecimientosComponent } from '@components/bloque-frase-agradecimientos/bloque-frase-agradecimientos.component';
import { CountdownFechaComponent } from '@components/countdown-fecha/countdown-fecha.component';
import { BloqueConfirmarAsistenciaWhatsappComponent } from '@components/bloque-confirmar-asistencia-whatsapp/bloque-confirmar-asistencia-whatsapp.component';
import { BloqueHotelesComponent } from '@components/bloque-hoteles/bloque-hoteles.component';
import { BloqueGaleriaFotosComponent } from '@components/bloque-galeria-fotos/bloque-galeria-fotos.component';
import { CarruselComponent } from '@components/carrusel/carrusel.component';
import { ContactBrideGroomComponent } from '@components/contact-bride-groom/contact-bride-groom.component';
import { EntradaBienvenidaComponent } from './entrada-bienvenida/entrada-bienvenida.component';

// Directivas
import { FadeInOnScrollDirective } from '@directives/fade-in-on-scroll.directive';
import { TextTypewriterDirective } from '@directives/text-typewriter.directive';
import { FadeInWithMoveDirective } from '@directives/fade-in-with-move.directive';
import { FadeInProgressiveDirective } from '@directives/fade-in-progressive.directive';
import { RotateOnLoadDirective } from '@directives/rotate-on-load.directive';


@NgModule({
  declarations: [
    BloqueHotelesComponent,
    BloqueConfirmarAsistenciaWhatsappComponent,
    BloqueGaleriaFotosComponent,
    CarruselComponent,
    ContactBrideGroomComponent,
    Bloque1PortadaComponent,
    SeparatorComponent,
    Bloque2Portada2Component,
    BloqueIglesiaComponent,
    BloqueCeremoniaComponent,
    BloqueCelebracionDetalleComponent,
    BloqueCompartirRedesSocialesComponent,
    BloqueFraseAgradecimientosComponent,
    CountdownFechaComponent,
    EntradaBienvenidaComponent,
    FadeInOnScrollDirective, TextTypewriterDirective, FadeInProgressiveDirective, RotateOnLoadDirective

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    BloqueHotelesComponent,
    BloqueConfirmarAsistenciaWhatsappComponent,
    BloqueGaleriaFotosComponent,
    CarruselComponent,
    ContactBrideGroomComponent,
    Bloque1PortadaComponent,
    SeparatorComponent,
    Bloque2Portada2Component,
    BloqueIglesiaComponent,
    BloqueCeremoniaComponent,
    BloqueCelebracionDetalleComponent,
    BloqueCompartirRedesSocialesComponent,
    BloqueFraseAgradecimientosComponent,
    CountdownFechaComponent,
    EntradaBienvenidaComponent,
    FadeInOnScrollDirective,
    TextTypewriterDirective,
    FadeInProgressiveDirective,
    RotateOnLoadDirective
  ]
})
export class ComponentsModule { }
