import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMcqexamComponent } from './add-mcqexam.component';

describe('AddMcqexamComponent', () => {
  let component: AddMcqexamComponent;
  let fixture: ComponentFixture<AddMcqexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMcqexamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMcqexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
