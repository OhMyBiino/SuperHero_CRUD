import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SuperHero_CRUD';
  heroes:SuperHero[] = [];

  constructor(private superHeroService:SuperHeroService){}

  ngOnInit() : void
  {
    this.heroes = this.superHeroService.getSuperHeroes();
    console.log(this.heroes)
  }
}
