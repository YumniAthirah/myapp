import { Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ContactpageComponent } from './home/contactpage/contactpage.component';
import { ForgotpageComponent } from './home/forgotpage/forgotpage.component';
import { LoginpageComponent } from './home/loginpage/loginpage.component';
import { SignuppageComponent } from './home/signuppage/signuppage.component';
import { UsersComponent } from './admin/users/users.component';

export const routes: Routes = [
    {
        path: "",
        component: HomepageComponent,
      },
      {
        path: "contact",
        component: ContactpageComponent,
      },
      {
        path: "login",
        component: LoginpageComponent,
      },
      {
        path: "signup",
        component: SignuppageComponent,
      },
      {
        path: "forgot",
        component: ForgotpageComponent,
      },
      {
        path: "users",
        component: UsersComponent,
      }
];
