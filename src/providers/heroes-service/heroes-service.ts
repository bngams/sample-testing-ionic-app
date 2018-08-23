import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HeroesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroesServiceProvider {

  heroes:any;

  constructor(public http: HttpClient) {
    console.log('Hello HeroesServiceProvider Provider');    
  }

  getAllHeroes(forceReload:boolean){
  	if(forceReload) {
	  	this.heroes = [
		  	{
				"realname": "Bruce Wayne",
				"name": "Batman",
				"cover": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
				"editor": "DC",
				"movies": [
					{"title": "The Dark Knight Rises", "releaseDate":"2012-07-05"},
					{"title": "The Dark Knight", "releaseDate":"2008-08-13"},
					{"title": "Batman Begins", "releaseDate":"2005-06-15"}
				]
			},
			{
				"realname": "Clark Kent",
				"name": "Superman",
				"editor": "DC",
				"cover": "https://vignette.wikia.nocookie.net/superman/images/9/96/MOS_Superman.jpg/revision/latest?cb=20130525073055",
				"movies": [
					{"title": "Man of Steel", "releaseDate":"2013-07-05"},
					{"title": "Batman v Superman", "releaseDate":"2016-07-05"}
				]
			},
			{
				"realname": "Tony Stark",
				"name": "Iron Man",
				"editor": "Marvel",
				"cover": "http://www.tekdizifilm.com/uploads/film/2016/09/iron-man-3-turkce-dublaj-tek-parca-full-hd-720p-izle-596.jpg",
				"movies": [
					{"title": "Iron Man", "releaseDate":"2008-07-05"},
					{"title": "Iron Man 2", "releaseDate":"2010-07-05"},
					{"title": "Iron Man 3", "releaseDate":"2013-07-05"}
				]
			}
	  	]  		
  	}
  	// force reload if empty
  	// if(!this.heroes) return this.getAllHeroes(true);
  	return this.heroes;
  }

}
