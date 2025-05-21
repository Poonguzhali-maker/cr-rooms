import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSponsorsComponent } from './add-sponsors.component';

describe('AddSponsorsComponent', () => {
  let component: AddSponsorsComponent;
  let fixture: ComponentFixture<AddSponsorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSponsorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
