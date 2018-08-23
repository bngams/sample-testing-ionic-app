import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CountriesServiceProvider } from '../../providers/countries-service/countries-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  countries:any;
  filteredCountries:any;

  constructor(public navCtrl: NavController, public countriesService: CountriesServiceProvider) {

  }

  ionViewDidLoad() {
  	this.initCountries();
  }

  initCountries() {
  	this.countriesService.getAllCountries()
  	.then( (res) => {
  		this.countries = res;
  		// launch once
  		this.filterCountries('');
  	}).catch( (err) => {
  		console.log(err);
  	});
  }

  filterCountriesEvent(ev: any) {
  	// get the search bar value
  	let searchTerm = ev.target.value;

  	// call filter
  	this.filterCountries(searchTerm);
  }

  filterCountries(searchTerm:string) {
  	// reset countries (get the original list)
  	this.filteredCountries = this.countries;

	// if the value is an empty string don't filter the items
    if (searchTerm && searchTerm.trim() != '') {
      this.filteredCountries = this.filteredCountries.filter((country) => {
        return (country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      })
    }
  }

}
