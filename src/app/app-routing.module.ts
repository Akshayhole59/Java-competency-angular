import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignuppComponent } from './pages/signupp/signupp.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/manager/dashboard/dashboard.component';
import { EmployeedashboardComponent } from './pages/employee/employeedashboard/employeedashboard.component';
//import { managerGuard } from './services/manager.guard';
//import { employeeGuard } from './services/employee.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/manager/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/manager/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/manager/add-categories/add-categories.component';
import { ViewExamComponent } from './pages/manager/view-exam/view-exam.component';
import { AddMcqexamComponent } from './pages/manager/add-mcqexam/add-mcqexam.component';
import { UpdateMcqexamComponent } from './pages/manager/update-mcqexam/update-mcqexam.component';
import { ViewQuestionsComponent } from './pages/manager/view-questions/view-questions.component';
// import { AddQuestionComponent } from './pages/manager/add-question/add-question.component';
import { AddMcqQuestionsComponent } from './pages/manager/add-mcq-questions/add-mcq-questions.component';
import { UpdateQuestionComponent } from './pages/manager/update-question/update-question.component';
import { AddPdfComponent } from './pages/manager/add-pdf/add-pdf.component';
import { UpdateCategoriesComponent } from './pages/manager/update-categories/update-categories.component';

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
    //canActivate:[employeeGuard]
  },
  {
    path: 'manager-dashboard',
    component: DashboardComponent,
   // pathMatch:'full',
   // canActivate:[managerGuard],
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
    path:'update-test/:testId',
    component:UpdateMcqexamComponent,
   },
   {
    path:'add-pdf',
    component: AddPdfComponent,
   },
  //  {
  //   path:'view-questions/:qid/:title',
  //   component:ViewTestQuestionsComponent,
  //  },
     {
     path:'view-questions',
      component:ViewQuestionsComponent,
     },
    {
      path:'update-questions/:qid',
       component:UpdateQuestionComponent,
   },
   {
      path:'update-categories/:category_id',
      component:UpdateCategoriesComponent,
   },
  //  {
  //   path:'add-questions/:qid/:title',
  //   component:AddQuestionComponent,
  //  },
   {
    path:'add-questions',
    component:AddMcqQuestionsComponent,
   },
  ],
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
