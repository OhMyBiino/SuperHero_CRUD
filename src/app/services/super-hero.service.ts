import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  
  constructor(private http:HttpClient) { }

  public getSuperHeroes() : Observable<SuperHero[]>
  {
    return this.http.get<SuperHero[]>('http://localhost:5150/api/SuperHero');
  }
}
