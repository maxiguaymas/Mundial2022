import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSobreComponent } from './modal-sobre.component';

describe('ModalSobreComponent', () => {
  let component: ModalSobreComponent;
  let fixture: ComponentFixture<ModalSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSobreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
