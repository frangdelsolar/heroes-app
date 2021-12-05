import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HeroService } from '@app/shared/services/hero.service';
import { Hero } from '@app/shared/models/hero.interface';



@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent implements OnInit {

  heroes: any;

  searchForm = this.fb.group({
    heroName: [''],
  })

  constructor(private heroSvc: HeroService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSearchHero(): void{
    const formValue = this.searchForm.value.heroName;
    this.heroSvc.searchHeroes(formValue).subscribe(res=>{
      this.heroes = res.results;
    });
  }

}
