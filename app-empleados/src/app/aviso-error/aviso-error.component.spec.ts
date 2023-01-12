import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoErrorComponent } from './aviso-error.component';

describe('AvisoErrorComponent', () => {
  let component: AvisoErrorComponent;
  let fixture: ComponentFixture<AvisoErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisoErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
