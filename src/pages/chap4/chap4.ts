import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the Chap4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chap4',
  templateUrl: 'chap4.html',
})
export class Chap4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  goBack(){
    this.navCtrl.pop();
} 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chap4Page');
  }

}
