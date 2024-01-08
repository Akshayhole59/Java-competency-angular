import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMcqexamComponent } from './update-mcqexam.component';

describe('UpdateMcqexamComponent', () => {
  let component: UpdateMcqexamComponent;
  let fixture: ComponentFixture<UpdateMcqexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMcqexamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateMcqexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
