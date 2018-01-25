import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  rating:number;
  counter:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    

  }

  ionViewWillEnter() {
    this.rating = 0;

    if(localStorage.getItem("rate") != null){
      let actualRating = Number(localStorage.getItem("rate"));
      this.counter = Number(localStorage.getItem("count"));
      this.rating = actualRating/this.counter;
    }
  }

  clearResults(){
    localStorage.clear();
  }

}
