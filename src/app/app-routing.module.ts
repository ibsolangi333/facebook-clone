import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login_components/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent}, 
  {path:'home', loadChildren:()=>import('./home/home.module')
  .then(mod=>mod.HomeModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
