import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { adminGuard } from './services/admin.guard';
import { userGuard } from './services/user.guard';
import { ProfileComponent as ProfileComponentAdmin } from './pages/admin/profile/profile.component';
import { ProfileComponent as ProfileComponentUser } from './pages/user/profile/profile.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { CreateCategoryComponent } from './pages/admin/create-category/create-category.component';
import { ViewQuizzesComponent as ViewQuizzesComponentAdmin } from './pages/admin/view-quizzes/view-quizzes.component';
import { CreateQuizComponent } from './pages/teacher/create-quiz/create-quiz.component';
import { ModifyQuizComponent } from './pages/admin/modify-quiz/modify-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { UserComponent } from './pages/user/user/user.component';
import { CreateQuestionComponent } from './pages/teacher/create-question/create-question.component';
import { ModifyQuestionComponent } from './pages/admin/modify-question/modify-question.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { ViewQuizzesComponent as ViewQuizzesComponentUser } from './pages/user/view-quizzes/view-quizzes.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { AttemptQuizComponent } from './pages/user/attempt-quiz/attempt-quiz.component';
import { TeacherComponent } from './pages/teacher/teacher/teacher.component';
import { teacherGuard } from './services/teacher.guard';
import { TeacherHomeComponent } from './pages/teacher/teacher-home/teacher-home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "signup",
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [adminGuard],
    children: [
      {
        path: "home",
        component: AdminHomeComponent
      },
      {
        path: "profile",
        component: ProfileComponentAdmin
      },
      {
        path: "categories",
        component: ViewCategoriesComponent
      },
      {
        path: "create-category",
        component: CreateCategoryComponent
      },
      {
        path: "quizzes",
        component: ViewQuizzesComponentAdmin,
        // children: [
        //   {
        //     path: "view-quiz-questions/:qId/:title",
        //     component: ViewQuizQuestionsComponent,
        //   }
        // ]
      },
      {
        path: "modify-quiz/:quizId",
        component: ModifyQuizComponent
      },
      {
        path: "view-quiz-questions/:quizId/:title",
        component: ViewQuizQuestionsComponent
      },
      {
        path: "modify-question/:questionId",
        component: ModifyQuestionComponent
      }
    ]
  },
  {
    path: "user",
    component: UserComponent,
    canActivate: [userGuard],
    children: [
      {
        path: "home",
        component: UserHomeComponent
      },
      {
        path: "profile",
        component: ProfileComponentUser
      },
      {
        path: "quizzes/:categoryId",
        component: ViewQuizzesComponentUser
      },
      {
        path: "instructions/:quizId/:title",
        component: InstructionsComponent
      }
    ]
  },
  {
    path: "attempt-quiz/:quizId",
    component: AttemptQuizComponent,
    canActivate: [userGuard],
  },
  {
    path: "teacher",
    component: TeacherComponent,
    canActivate: [teacherGuard],
    children: [
      {
        path: "home",
        component: TeacherHomeComponent
      },
      {
        path: "profile",
        component: ProfileComponentUser
      },
      {
        path: "create-quiz",
        component: CreateQuizComponent
      },
      {
        path: "create-question",
        component: CreateQuestionComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
