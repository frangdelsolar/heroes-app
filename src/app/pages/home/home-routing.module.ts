import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeroComponent } from '../hero/hero.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'hero/:id', component: HeroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
