import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeroesServiceProvider } from '../../providers/heroes-service/heroes-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  editorFilter:string = 'DC'
  heroes:any;

  constructor(public navCtrl: NavController,  public heroesService: HeroesServiceProvider) {
  }

  ionViewDidLoad() {
	this.initHeroes();
  }

  initHeroes() {
  	this.heroes = this.heroesService.getAllHeroes(true);
  }

}
