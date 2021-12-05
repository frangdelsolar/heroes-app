import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '@app/shared/models/hero.interface';
import { HeroService } from '@app/shared/services/hero.service';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: Hero;
  isRemovable: BehaviorSubject<boolean>;

  constructor(private heroSvc: HeroService) { }

  ngOnInit(): void {
      const rawData = JSON.stringify(this.hero);
      const escapedData = rawData.replace(/-/g, "_");
      this.hero = JSON.parse(escapedData);
  }

  addHero(){
    this.heroSvc.addHero(this.hero);
  }

  removeHero(){
    this.heroSvc.removeHero(this.hero);
  }

}
