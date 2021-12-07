import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '@app/shared/models/hero.interface';
import { HeroService } from '@app/shared/services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public hero: Hero;

  constructor(private route: ActivatedRoute, private heroSvc: HeroService) { 
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null){
      this.heroSvc.getHero(parseInt(id)).subscribe(res=>this.hero=res);
    }
  }

  ngOnInit(): void {
    
  }

}
