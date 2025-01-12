import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloqueConfirmarAsistenciaWhatsappComponent } from './bloque-confirmar-asistencia-whatsapp.component';

describe('BloqueConfirmarAsistenciaWhatsappComponent', () => {
  let component: BloqueConfirmarAsistenciaWhatsappComponent;
  let fixture: ComponentFixture<BloqueConfirmarAsistenciaWhatsappComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueConfirmarAsistenciaWhatsappComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloqueConfirmarAsistenciaWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
