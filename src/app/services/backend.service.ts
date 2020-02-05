import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BackendService {


    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }



    constructor(private http: HttpClient) {
    }



    getPersons(): Observable<Person[]> {
        return this.http.get<Person[]>(environment.apiUrl + '/person', this.httpOptions);
    }



}
