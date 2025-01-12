import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloqueFraseAgradecimientosComponent } from './bloque-frase-agradecimientos.component';

describe('BloqueFraseAgradecimientosComponent', () => {
  let component: BloqueFraseAgradecimientosComponent;
  let fixture: ComponentFixture<BloqueFraseAgradecimientosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueFraseAgradecimientosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloqueFraseAgradecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
