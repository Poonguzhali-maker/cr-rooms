import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMasterDataComponent } from './manage-master-data.component';

describe('ManageMasterDataComponent', () => {
  let component: ManageMasterDataComponent;
  let fixture: ComponentFixture<ManageMasterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMasterDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
