import { Routes } from '@angular/router';
import { SuperheroTabComponent } from './components/superhero/superhero-tab/superhero-tab.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: "", component: AppComponent},
    {path: "SuperHeroes", component: SuperheroTabComponent}
];
