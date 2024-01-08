import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignuppComponent } from './pages/signupp/signupp.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.intercepter';
import { DashboardComponent } from './pages/manager/dashboard/dashboard.component';
import { EmployeedashboardComponent } from './pages/employee/employeedashboard/employeedashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/manager/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/manager/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/manager/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/manager/add-categories/add-categories.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { ViewExamComponent } from './pages/manager/view-exam/view-exam.component';
import { AddMcqexamComponent } from './pages/manager/add-mcqexam/add-mcqexam.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateMcqexamComponent } from './pages/manager/update-mcqexam/update-mcqexam.component';
import { ViewTestQuestionsComponent } from './pages/manager/view-test-questions/view-test-questions.component';
import { AddQuestionComponent } from './pages/manager/add-question/add-question.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignuppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    EmployeedashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewExamComponent,
    AddMcqexamComponent,
    UpdateMcqexamComponent,
    ViewTestQuestionsComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [
    provideClientHydration(),
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
