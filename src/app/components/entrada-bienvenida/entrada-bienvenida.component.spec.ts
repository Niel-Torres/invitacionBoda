import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntradaBienvenidaComponent } from './entrada-bienvenida.component';

describe('EntradaBienvenidaComponent', () => {
  let component: EntradaBienvenidaComponent;
  let fixture: ComponentFixture<EntradaBienvenidaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaBienvenidaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntradaBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
