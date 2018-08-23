import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from '../other/other';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  navigate() {
  	this.navCtrl.push(HomePage)
  }

}
