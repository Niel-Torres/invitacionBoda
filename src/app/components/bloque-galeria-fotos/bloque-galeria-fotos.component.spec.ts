import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloqueGaleriaFotosComponent } from './bloque-galeria-fotos.component';

describe('BloqueGaleriaFotosComponent', () => {
  let component: BloqueGaleriaFotosComponent;
  let fixture: ComponentFixture<BloqueGaleriaFotosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueGaleriaFotosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloqueGaleriaFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
