import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThanksPage } from "../thanks/thanks";
import { AdminPage } from "../admin/admin";

/**
 * Generated class for the AttendancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {

  rate:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewWillEnter() {
    this.rate = 0;
  }

  completeFeedback(event){
    
    if(localStorage.getItem("rate") == null){
      localStorage.setItem("rate", this.rate.toString());
      localStorage.setItem("count", '1');
    }else{
      let actualRating = Number(localStorage.getItem("rate"))+this.rate;
      let count = Number(localStorage.getItem("count"))+1;

      localStorage.setItem("rate",  actualRating.toString());
      localStorage.setItem("count", count.toString());
      
    }

    this.navCtrl.push(ThanksPage);
  }

  goToAdmin(){
    this.navCtrl.push(AdminPage)
  }

}
