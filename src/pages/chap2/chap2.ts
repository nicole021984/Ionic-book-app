import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chap3Page } from '../chap3/chap3';
/**
 * Generated class for the Chap2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chap2',
  templateUrl: 'chap2.html',
})
export class Chap2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public gotoChap3() {
    this.navCtrl.push(Chap3Page);
  }

  goBack(){
    this.navCtrl.pop();
} 
  ionViewDidLoad() {
    console.log('ionViewDidLoad Chap2Page');
  }

}
