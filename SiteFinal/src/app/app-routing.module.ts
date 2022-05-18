import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { DesenvolvedorComponent } from './desenvolvedor/desenvolvedor.component';
import { HomeComponent } from './home/home.component';


// path- pasta
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'contato', component: ContatoComponent},
  {path:'desenvolvedor', component: DesenvolvedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
