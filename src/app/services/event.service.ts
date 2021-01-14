import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EventM } from '../model/user.model';

@Injectable()
export class EventMangement {
    constructor(public http: HttpClient) {
    }
    
    // get all events by userID
    public getEventByUserID(userID: number): Observable<HttpResponse<any[]>> {
        return this.http.get<any[]>('http://localhost:8091/geteventbyuserid/' + userID,
            { observe: 'response' })
            .pipe(
                catchError(this.handleError)
            );
    }

    // create event 
    public createEvent(event : EventM) : Observable<HttpResponse<EventM>>{
        return this.http.post<EventM>(
            'http://localhost:8091/createevent/',
            event, 
            {observe: 'response'}
        ).pipe(
            catchError(this.handleError)
        );
    }

    // delete event
    public deleteOneEvent(id: Number): Observable<HttpResponse<EventM>> {
        return this.http.delete<EventM>('http://localhost:8091/deleteevent/' + id, 
            { observe: 'response' });
    }

    // To make code loosely coupled
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            //client error 
            errorMessage = 'Error ' + error.error.message;
        } else {
            //server error 
            errorMessage = `Error Code : ${error.status} \n Message :  ${error.message}`
        }
        return throwError(errorMessage);
    }
}