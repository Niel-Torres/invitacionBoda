import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloqueCelebracionDetalleComponent } from './bloque-celebracion-detalle.component';

describe('BloqueCelebracionDetalleComponent', () => {
  let component: BloqueCelebracionDetalleComponent;
  let fixture: ComponentFixture<BloqueCelebracionDetalleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueCelebracionDetalleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloqueCelebracionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
