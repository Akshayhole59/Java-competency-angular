import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignuppComponent } from './pages/signupp/signupp.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/manager/dashboard/dashboard.component';
import { EmployeedashboardComponent } from './pages/employee/employeedashboard/employeedashboard.component';
import { managerGuard } from './services/manager.guard';
import { employeeGuard } from './services/employee.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/manager/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/manager/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/manager/add-categories/add-categories.component';
import { ViewExamComponent } from './pages/manager/view-exam/view-exam.component';
import { AddMcqexamComponent } from './pages/manager/add-mcqexam/add-mcqexam.component';
import { UpdateMcqexamComponent } from './pages/manager/update-mcqexam/update-mcqexam.component';
import { ViewTestQuestionsComponent } from './pages/manager/view-test-questions/view-test-questions.component';
import { AddQuestionComponent } from './pages/manager/add-question/add-question.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'signupp',
    component:SignuppComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path: 'employee-dashboard',
    component: EmployeedashboardComponent,
    pathMatch:'full',
    canActivate:[employeeGuard]
  },
  {
    path: 'manager-dashboard',
    component: DashboardComponent,
   // pathMatch:'full',
    canActivate:[managerGuard],
    children:[{
     path:'',
     component:WelcomeComponent,
    },
    {
      path:'profile',
      component:ProfileComponent,
    },
   {
    path:'categories',
    component:ViewCategoriesComponent,
   },
   {
    path:'add-category',
    component:AddCategoriesComponent,
   },
   {
    path:'test',
    component:ViewExamComponent,
   },
   {
    path:'add-test',
    component:AddMcqexamComponent,
   },
   {
    path:'update-test/:qid',
    component:UpdateMcqexamComponent,
   },
   {
    path:'view-questions/:qid/:title',
    component:ViewTestQuestionsComponent,
   },
   {
    path:'add-questions/:qid/:title',
    component:AddQuestionComponent,
   },
  ],
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
