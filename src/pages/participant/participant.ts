import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageManager } from '../../utils/PageManager';
import { FormsModule }   from '@angular/forms';
import { Participant } from '../../models/Participant';
import { Group } from '../../models/Group';


@Component({
  selector: 'page-participant',
  templateUrl: 'participant.html'

})
export class ParticipantPage extends PageManager{
	private showContacts : boolean;
  private titleDisplay: string;
  participant : Participant;
  group: Group;


	constructor(public nav: NavController, public navParams: NavParams) {
	  	super(nav);
      this.titleDisplay = 'New participant';
	  	this.showContacts = navParams.data.showContacts;
      this.group = new Group();
      this.group = navParams.data.currentGroup;
      this.participant = new Participant();
      console.log(this.group);
	  	if(this.showContacts){
        this.titleDisplay = 'Group participants';
	  	}
	}

  generateHashParticipant = function(): string{
      return '&57433#';
  }


  createParticipant = function(){
    this.participant.id = this.group.groupId+'-'+this.generateHashParticipant();
    this.group.participants.push(this.participant);
    this.group.debtors.push(this.participant);
    this.group.waitTurns.push(this.participant);
    this.nav.pop();

  }


}
