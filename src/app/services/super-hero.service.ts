import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  
  constructor() { }

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
