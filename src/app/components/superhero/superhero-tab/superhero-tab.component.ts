import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SuperHero } from '../../../models/super-hero';
import { SuperHeroService } from '../../../services/super-hero.service';

@Component({
  selector: 'app-superhero-tab',
  imports: [CommonModule],
  templateUrl: './superhero-tab.component.html',
  styles: ``
})
export class SuperheroTabComponent {
  superHeroes: SuperHero[] = [];

  constructor(private superHeroService: SuperHeroService){}
  
  ngOnInit(): void
  {
    this.superHeroService
    .getSuperHeroes()
    .subscribe(result => { this.superHeroes = result });
    console.log(this.superHeroes)
  }
}
