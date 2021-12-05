import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '@app/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TeamStatsComponent } from './components/team-stats/team-stats.component';
import { SearchHeroComponent } from '@pages/home/components/search-hero/search-hero.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpinnerComponent } from '@app/shared/components/spinner/spinner.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserCardComponent,
    SearchHeroComponent,
    HeroCardComponent,
    MyTeamComponent,
    TeamStatsComponent,
    SpinnerComponent



  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FlexLayoutModule

    
  ]
})
export class HomeModule { }
