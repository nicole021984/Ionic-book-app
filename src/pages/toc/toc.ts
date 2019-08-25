import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chap1Page } from '../chap1/chap1';

/**
 * Generated class for the TocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',
})
export class TocPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public gotoChap1() {
    this.navCtrl.push(Chap1Page);
  }

  goBack(){
    this.navCtrl.pop();
} 

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
  }

}
