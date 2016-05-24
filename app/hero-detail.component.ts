import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls:  ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;
  /*inject the both the RouteParams service
   and the HeroService into the constructor*/
  constructor(
  private heroService: HeroService,
  private routeParams: RouteParams) { }
  
  ngOnInit() {
    /*Extract id by calling routeParams.get method.
    The hero id is a number. Route parameters are always strings. 
    So we convert the route parameter value to a number with the 
    JavaScript (+) operator.*/
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }
  
  goBack() {
    window.history.back();
 }



}
