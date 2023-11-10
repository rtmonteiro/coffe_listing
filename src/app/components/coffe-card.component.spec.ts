import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoffeCardComponent } from './coffe-card.component';

describe('CoffeCardComponent', () => {
  let component: CoffeCardComponent;
  let fixture: ComponentFixture<CoffeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoffeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
