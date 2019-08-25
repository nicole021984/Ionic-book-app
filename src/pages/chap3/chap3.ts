import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chap4Page } from '../chap4/chap4';
/**
 * Generated class for the Chap3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chap3',
  templateUrl: 'chap3.html',
})
export class Chap3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public gotoChap4() {
    this.navCtrl.push(Chap4Page);
  }

  goBack(){
    this.navCtrl.pop();
} 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chap3Page');
  }

}
