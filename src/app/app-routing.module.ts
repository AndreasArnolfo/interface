import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';


const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'contacts',  component: ContactsComponent },
  {path: 'contacts/:id', component: ContactDetailComponent},
  {path: 'contactedit/:id', component: ContactEditComponent},
  {path: 'videodetail/:id', component: VideoDetailComponent},
  {path: 'contactadd', component: ContactEditComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
