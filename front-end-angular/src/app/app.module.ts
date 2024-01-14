import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { authInterceptorProviders } from './services/auth.interceptor';
import { ProfileComponent as ProfileComponentAdmin } from './pages/admin/profile/profile.component';
import { ProfileComponent as ProfileComponentUser } from './pages/user/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent as SidebarComponentAdmin } from './pages/admin/sidebar/sidebar.component';
import { SidebarComponent as SidebarComponentUser } from './pages/user/sidebar/sidebar.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { MatTableModule } from '@angular/material/table';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { CreateCategoryComponent } from './pages/admin/create-category/create-category.component';
import { MatDividerModule } from '@angular/material/divider';
import { ViewQuizzesComponent as ViewQuizzesComponentAdmin } from './pages/admin/view-quizzes/view-quizzes.component';
import { ViewQuizzesComponent as ViewQuizzesComponentUser } from './pages/user/view-quizzes/view-quizzes.component';
import { CreateQuizComponent } from './pages/teacher/create-quiz/create-quiz.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ModifyQuizComponent } from './pages/admin/modify-quiz/modify-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { UserComponent } from './pages/user/user/user.component';
import { RouterModule } from '@angular/router';
import { CreateQuestionComponent } from './pages/teacher/create-question/create-question.component';
import { MatRadioModule } from '@angular/material/radio';
import { ModifyQuestionComponent } from './pages/admin/modify-question/modify-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { AttemptQuizComponent } from './pages/user/attempt-quiz/attempt-quiz.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { TeacherComponent } from './pages/teacher/teacher/teacher.component';
import { TeacherHomeComponent } from './pages/teacher/teacher-home/teacher-home.component';
import { SidebarComponent } from './pages/teacher/sidebar/sidebar.component';
import { ProfileComponent } from './pages/teacher/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponentAdmin,
    ProfileComponentUser,
    SidebarComponentAdmin,
    AdminHomeComponent,
    ViewCategoriesComponent,
    CreateCategoryComponent,
    ViewQuizzesComponentAdmin,
    CreateQuizComponent,
    ModifyQuizComponent,
    ViewQuizQuestionsComponent,
    AdminComponent,
    UserComponent,
    CreateQuestionComponent,
    ModifyQuestionComponent,
    SidebarComponentUser,
    UserHomeComponent,
    ViewQuizzesComponentUser,
    InstructionsComponent,
    AttemptQuizComponent,
    TeacherComponent,
    TeacherHomeComponent,
    SidebarComponent,
    ProfileComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    RouterModule,
    MatRadioModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground : true,
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
