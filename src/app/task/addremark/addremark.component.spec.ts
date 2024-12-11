import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremarkComponent } from './addremark.component';

describe('AddremarkComponent', () => {
  let component: AddremarkComponent;
  let fixture: ComponentFixture<AddremarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddremarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddremarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
