import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloqueCeremoniaComponent } from './bloque-ceremonia.component';

describe('BloqueCeremoniaComponent', () => {
  let component: BloqueCeremoniaComponent;
  let fixture: ComponentFixture<BloqueCeremoniaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqueCeremoniaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloqueCeremoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
