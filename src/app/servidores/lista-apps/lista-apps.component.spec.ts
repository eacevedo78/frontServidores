import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAppsComponent } from './lista-apps.component';

describe('ListaAppsComponent', () => {
  let component: ListaAppsComponent;
  let fixture: ComponentFixture<ListaAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
