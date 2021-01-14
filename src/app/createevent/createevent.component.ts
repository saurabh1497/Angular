import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventM } from '../model/user.model';
import { EventMangement } from '../services/event.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {

  event: EventM;
  public errMessage: string;
  public hasError: boolean = false;

  EventForm = new FormGroup({
    eventName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[a-zA-z ]*')]),
    countOfPanel: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2), ]),
    skillSet: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30), ]),
    date: new FormControl('', [Validators.required]),
    escTime: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    entryCount: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2), ]),
    postID : new FormControl('', [Validators.required]),
    designation : new FormControl('', [Validators.required]),
    department : new FormControl('', [Validators.required]),
    level : new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required])
  })

  constructor(public router: Router, public eventMangement: EventMangement) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    //console.log(this.EventForm.value);
    this.event = this.EventForm.value;
    console.log(this.event);
    this.eventMangement.createEvent(this.event).
    subscribe(
      data => { // good practise
        if (data.status == 200) {
          console.log("status is 200 ok");
          // can navigate or proceed
          this.EventForm.reset();
          alert("Event Created");
        }
        this.hasError = false;
      },
      (error: string) => {
        this.hasError = true;
        this.errMessage = error;
      }
    )
  }

}
