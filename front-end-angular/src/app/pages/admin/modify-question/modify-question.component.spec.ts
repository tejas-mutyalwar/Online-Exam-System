import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyQuestionComponent } from './modify-question.component';

describe('ModifyQuestionComponent', () => {
  let component: ModifyQuestionComponent;
  let fixture: ComponentFixture<ModifyQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyQuestionComponent]
    });
    fixture = TestBed.createComponent(ModifyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
