import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisVideojuegosPage } from './mis-videojuegos.page';

describe('MisVideojuegosPage', () => {
  let component: MisVideojuegosPage;
  let fixture: ComponentFixture<MisVideojuegosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisVideojuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
