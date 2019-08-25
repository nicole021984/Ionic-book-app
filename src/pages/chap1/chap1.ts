import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chap2Page } from '../chap2/chap2';
/**
 * Generated class for the Chap1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chap1',
  templateUrl: 'chap1.html',
})
export class Chap1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public gotoChap2() {
    this.navCtrl.push(Chap2Page);
  }

  goBack(){
    this.navCtrl.pop();
} 


  ionViewDidLoad() {
    console.log('ionViewDidLoad Chap1Page');
  }

}
