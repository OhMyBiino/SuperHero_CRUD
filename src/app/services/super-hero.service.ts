import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  
  constructor(private http:HttpClient) { }

  public getSuperHeroes(): SuperHero[]
  {
    let hero: SuperHero[] = [
      {
         id:1,
        name: "SpiderMan",
        firstName :"Peter",
        lastName :"Parker",
        location :"Transville Homes"
      },
      { 
        id :1,
        name :"BatMan",
        firstName :"Bruce",
        lastName : "Willis",
        location :"Lynville Homes"
      }
    ];
    
    return hero
  }
}
