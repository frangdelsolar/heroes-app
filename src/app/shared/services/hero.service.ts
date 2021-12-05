import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, take, toArray } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Hero } from 'src/app/shared/models/hero.interface';
import { environment } from '@env/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiUrl = `${environment.API_HEROES_URL}`;

  private _heroes = new BehaviorSubject<Hero[]>([]);
  readonly heroes$ = this._heroes.asObservable();
  private heroes: Hero[] = [];


  localHeroes: Hero[] = [];


  constructor(private http: HttpClient) { }

  getHero(id: number): Observable<Hero>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Hero>(url, httpOptions);
  }

  searchHeroes(query: string): Observable<any>{
    const url = `${this.apiUrl}/search/${query}`;
    return this.http.get<any>(url, httpOptions)
      .pipe(
        mergeMap((data: Response) => {
            return of(data) 
          }
        ));
  }

  errorHandler(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `Body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }


  storeHeroInLocalStorage(heroId: number){
    const storedHeroesList = localStorage.getItem('heroesList');
    let heroesIdList = new Array();

    if(storedHeroesList){
        heroesIdList = JSON.parse(storedHeroesList);
    } 

    heroesIdList.push(heroId)
    localStorage.setItem('heroesList', JSON.stringify(heroesIdList));
  }

  removeHeroFromLocalStorage(heroId: number){
    let storedHeroesList = localStorage.getItem('heroesList');
    let heroesIdList: number[] = [];

    if(storedHeroesList){
      heroesIdList = JSON.parse(storedHeroesList);
      heroesIdList.splice(heroesIdList.indexOf(heroId), 1);
      localStorage.setItem('heroesList', JSON.stringify(heroesIdList));
    } 
  }

  getHeroesFromLocalStorage(){
    this.localHeroes = [];
    const storedHeroesList = localStorage.getItem('heroesList');
    let heroesIdList: number[] = [];

    if(storedHeroesList){
        heroesIdList = JSON.parse(storedHeroesList);
        for (let num of heroesIdList){
          this.getHero(num).subscribe(res=>{
            this.addHero(res)
          })
        }
    } 
  }

  getStoredHeroes(): Observable<Hero[]>{
    this.getHeroesFromLocalStorage();
    return of(this.localHeroes);
  }


  addHero(hero: Hero){

    let addToTeam: boolean = true;
    
    if (this.heroes.includes(hero)){
      alert('This guy is in youre team already!');
      addToTeam = false;
    }

    let goodHeroes: number = 0;
    let badHeroes: number = 0;
    let neutralHeroes: number = 0;

    this.heroes.forEach((h, i)=>{
      if (h.id == hero.id) {
        alert('This guy is in youre team already!');
        addToTeam = false;
      }
      
      if (h.biography.alignment=='good') goodHeroes++
      else if (h.biography.alignment=='bad') badHeroes++
      else neutralHeroes++
    })

    if(this.heroes.length >= 6) {
      alert("You have only six slots for heroes in your team. Remove one to continue.")
      addToTeam = false;
    } else if (goodHeroes >= 3 && hero.biography.alignment=="good") {
      alert("You have only three slots for good heroes in your team. Remove one to continue.")
      addToTeam = false;
    } else if (badHeroes >= 3 && hero.biography.alignment=="bad") {
      alert("You have only three slots for bad heroes in your team. Remove one to continue.")
      addToTeam = false;
    }

    if (addToTeam==true){
      this.heroes.push(hero);
      this._heroes.next(Object.assign([], this.heroes));
      this.storeHeroInLocalStorage(hero.id);
    }

  }

  removeHero(hero: Hero){
    this.heroes.forEach((h, i)=>{
      if(h.id === hero.id){
        this.heroes.splice(i, 1);
      }
      this._heroes.next(Object.assign([], this.heroes));
    })
    this.removeHeroFromLocalStorage(hero.id);
  }

}
