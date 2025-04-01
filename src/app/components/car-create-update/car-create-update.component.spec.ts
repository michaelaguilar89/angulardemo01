import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCreateUpdateComponent } from './car-create-update.component';

describe('CarCreateUpdateComponent', () => {
  let component: CarCreateUpdateComponent;
  let fixture: ComponentFixture<CarCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarCreateUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
