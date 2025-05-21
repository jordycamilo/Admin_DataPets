import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrdsComponent } from './pqrds.component';

describe('PqrdsComponent', () => {
  let component: PqrdsComponent;
  let fixture: ComponentFixture<PqrdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PqrdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PqrdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
