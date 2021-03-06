import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PageManager } from '../../utils/PageManager';
import { Group } from '../../models/Group';

/**
 * Generated class for the GroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage extends PageManager{
   group : Group;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	super(navCtrl);
  	this.group = new Group();
  	this.group = navParams.data;

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad GroupPage');
  }

}
