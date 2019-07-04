import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PmkjComponent } from './pmkj/pmkj.component';

const routes: Routes = [
  {path: 'home', component: PmkjComponent},
  {path: 'lazy', loadChildren: 'src/app/lazy/lazy.module#LazyModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
