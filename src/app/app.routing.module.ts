import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './views/home/home.component'

let routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false })
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}