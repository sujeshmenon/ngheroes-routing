import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  getHeroes() {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
 
 /*Lifecycle Hook*/
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
  
  gotoDetail(hero: Hero) {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

