import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazypmkjComponent } from '../lazypmkj/lazypmkj.component';
import { Routes, RouterModule } from '@angular/router';

const lazyRoutes: Routes = [
  {path: 'pmkj', component: LazypmkjComponent}
];

@NgModule({
  declarations: [LazypmkjComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(lazyRoutes)
  ]
})
export class LazyModule { }
