import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyQuizComponent } from './modify-quiz.component';

describe('ModifyQuizComponent', () => {
  let component: ModifyQuizComponent;
  let fixture: ComponentFixture<ModifyQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyQuizComponent]
    });
    fixture = TestBed.createComponent(ModifyQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
