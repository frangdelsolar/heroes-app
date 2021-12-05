import { Component, OnInit } from '@angular/core';
import { Hero } from '@app/shared/models/hero.interface';
import { HeroService } from '@app/shared/services/hero.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {
  intelligence:number = 1;
  strength:number = 1;
  speed:number = 1;
  durability:number = 1;
  power:number = 1;
  combat:number = 1;

  heroes$: Observable<Hero[]>;

  constructor(private heroSvc: HeroService) { }

  ngOnInit(): void {
      this.heroes$ = this.heroSvc.heroes$;
  }


}
