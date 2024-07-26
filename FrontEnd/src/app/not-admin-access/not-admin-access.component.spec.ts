import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAdminAccessComponent } from './not-admin-access.component';

describe('NotAdminAccessComponent', () => {
  let component: NotAdminAccessComponent;
  let fixture: ComponentFixture<NotAdminAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotAdminAccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotAdminAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
