import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  add(name: string): void {
    name = name.trim()
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero); // remove and reset heroes
    this.heroService.deleteHero(hero.id).subscribe();  // delete hero from in memory storage
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // Call the Service async method to get an observable
    const heroesObservable = this.heroService.getHeroes();
    // Subscribe to the observable to get the result
    heroesObservable.subscribe((result) => {
      // Set a property based on the result
      this.heroes = result
    });

    // Shorthand
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
