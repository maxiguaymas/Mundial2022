import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguritaComponent } from './figurita.component';

describe('FiguritaComponent', () => {
  let component: FiguritaComponent;
  let fixture: ComponentFixture<FiguritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiguritaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiguritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
