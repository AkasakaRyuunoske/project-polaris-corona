import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtsuPComponent } from './components/utsu-p/utsu-p.component';
import { ShitComponent } from './components/shit/shit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'utsup', component: UtsuPComponent},
  { path: 'shit', component: ShitComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
