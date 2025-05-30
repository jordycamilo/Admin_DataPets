import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsdComponent } from './pqrsd.component';

describe('PqrsdComponent', () => {
  let component: PqrsdComponent;
  let fixture: ComponentFixture<PqrsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PqrsdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PqrsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
