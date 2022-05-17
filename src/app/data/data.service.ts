import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {

    return this.http.post('https://putsreq.com/d3no1s7Jp9TNXGP6loKz', userSettings);
    // thành công thì trả về
    // of() là 1 function tạo ra 1 new Observable mới
    //return of(userSettings);
  }

  getSubscriptionType(): Observable<string[]>{
    return of(['monthly', 'annual', 'lifetime'])
  }
}
