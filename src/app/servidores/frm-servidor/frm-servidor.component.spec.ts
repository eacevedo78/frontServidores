import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmServidorComponent } from './frm-servidor.component';

describe('FrmServidorComponent', () => {
  let component: FrmServidorComponent;
  let fixture: ComponentFixture<FrmServidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmServidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
