import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventM } from '../model/user.model';
import { EventMangement } from './../services/event.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  userID: number = 0;
  eventM: EventM[] = [];
  eventID: number;

  constructor(public router: Router, private actRoute: ActivatedRoute, public eventMangement: EventMangement) {
    this.userID = actRoute.snapshot.params.userID;
  }

  ngOnInit(): void {
    this.eventMangement.getEventByUserID(this.userID).
      subscribe(
        resp => {
          // console.log(resp);
          console.log(resp.statusText);
          console.log(resp.status);
          console.log(resp.url);
          this.eventM = resp.body;
          console.log(this.eventM);
        }
      )


  }

  Delete(ID) {
    console.log(ID);
    this.eventMangement.deleteOneEvent(ID.eventId).
     subscribe(
      resp => {
        if (resp.status == 200) {
          for (let i = 0; i < this.eventM.length; i++) {
            //iterate course
            let c = this.eventM[i];
            //give 1 course to c
            if (c.eventID == this.eventID) {
              //delete it
              this.eventM.splice(i, 1);
            }
          }
        }
      }
    );
    alert("This " + this.eventID + " Event Deleted");
  }
}
