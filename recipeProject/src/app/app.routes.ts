import { Routes } from '@angular/router';
import { LoginComponent } from './comonents/login/login.component';
import { RegisterComponent } from './comonents/register/register.component';
import { NotFoundComponent } from './comonents/not-found/not-found.component';
import { LogoutComponent } from './comonents/logout/logout.component';

export const routes: Routes =  [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'recipe', loadChildren:()=>import  ('./Recipe/recipe/recipe.module').then(c=>c.RecipeModule)},
    { path: 'register', component: RegisterComponent },
    { path: 'logout',component: LogoutComponent },
    { path: '**', component: NotFoundComponent }];