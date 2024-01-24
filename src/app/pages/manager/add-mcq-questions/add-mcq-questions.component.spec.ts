import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMcqQuestionsComponent } from './add-mcq-questions.component';

describe('AddMcqQuestionsComponent', () => {
  let component: AddMcqQuestionsComponent;
  let fixture: ComponentFixture<AddMcqQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMcqQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMcqQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
