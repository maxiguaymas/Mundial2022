import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuard } from './guards/auth.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {path: '', redirectTo: 'inicio',pathMatch: 'full'},
  {path: 'inicio', component: HomePageComponent},
  {path: 'contacto', component: ContactPageComponent},
  {path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule), canActivate: [AuthGuard]},
  {path: 'usuario', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),canActivate: [UserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
