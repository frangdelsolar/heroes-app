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
  weight: number = 0;
  height: number = 0;

  heroes$: Observable<Hero[]>;
  _heroes: Hero[] = [];

  constructor(private heroSvc: HeroService) { }

  ngOnInit(): void {
      this.heroes$ = this.heroSvc.heroes$;
      this.heroSvc.heroes$.subscribe(res=>{
        this._heroes = res;
      this.update();

      })

    }

  update(){
      this.intelligence = 0;
      this.strength = 0;
      this.speed = 0;
      this.durability = 0;
      this.power = 0;
      this.combat = 0; 
      this.weight = 0;
      this.height = 0;

      this._heroes.forEach((h, i) =>{
        this.intelligence += parseInt(h.powerstats.intelligence);
        this.strength += parseInt(h.powerstats.strength);
        this.speed += parseInt(h.powerstats.speed);
        this.durability += parseInt(h.powerstats.durability);
        this.power += parseInt(h.powerstats.power);
        this.combat  += parseInt(h.powerstats.combat);

        let we = h.appearance.weight[1].split(' ')[0];
        let he = h.appearance.height[1].split(' ')[0];
        if(we != undefined && we != null) this.weight += parseFloat(we);
        if(he != undefined && he != null) this.height += parseFloat(he);
      })

      if (this._heroes.length>0){
        this.weight /= this._heroes.length;
        this.height /= this._heroes.length;
      }

  }

}
