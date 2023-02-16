import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCredComponent } from './lista-cred.component';

describe('ListaCredComponent', () => {
  let component: ListaCredComponent;
  let fixture: ComponentFixture<ListaCredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
