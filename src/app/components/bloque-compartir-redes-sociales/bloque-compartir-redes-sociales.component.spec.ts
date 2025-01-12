import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloqueCompartirRedesSocialesComponent } from './bloque-compartir-redes-sociales.component';

describe('BloqueCompartirRedesSocialesComponent', () => {
  let component: BloqueCompartirRedesSocialesComponent;
  let fixture: ComponentFixture<BloqueCompartirRedesSocialesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueCompartirRedesSocialesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloqueCompartirRedesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
