import { Component, OnInit } from '@angular/core';
import { Hero } from '@app/shared/models/hero.interface';
import { HeroService } from '@app/shared/services/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(private heroSvc: HeroService) { }

  ngOnInit(): void {
      this.heroes$ = this.heroSvc.heroes$;
  }

}
