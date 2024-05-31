import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConformComponent } from './delete-conform.component';

describe('DeleteConformComponent', () => {
  let component: DeleteConformComponent;
  let fixture: ComponentFixture<DeleteConformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteConformComponent]
    });
    fixture = TestBed.createComponent(DeleteConformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
