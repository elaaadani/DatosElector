import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosElectorComponent } from './datos-elector.component';

describe('DatosElectorComponent', () => {
  let component: DatosElectorComponent;
  let fixture: ComponentFixture<DatosElectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosElectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosElectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
