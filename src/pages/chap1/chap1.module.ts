import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chap1Page } from './chap1';

@NgModule({
  declarations: [
    Chap1Page,
  ],
  imports: [
    IonicPageModule.forChild(Chap1Page),
  ],
})
export class Chap1PageModule {}
