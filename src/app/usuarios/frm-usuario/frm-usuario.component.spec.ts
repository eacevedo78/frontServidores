import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmUsuarioComponent } from './frm-usuario.component';

describe('FrmUsuarioComponent', () => {
  let component: FrmUsuarioComponent;
  let fixture: ComponentFixture<FrmUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
