import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio',pathMatch: 'full'},
  {path: 'inicio', component: HomePageComponent},
  {path: 'contacto', component: ContactPageComponent},
  {path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'usuario', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
