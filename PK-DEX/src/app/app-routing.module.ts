import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DexComponent } from './dex/dex.component';

const routes: Routes = [
  {
    path: 'dex',
    component: DexComponent
  },
  {
    path: '**',
    redirectTo: 'dex'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
