import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RandomDataService {

  private messages = new BehaviorSubject('default message')
  currentMsg = this.messages.asObservable();


  public checkSub = new BehaviorSubject('Taste hi nahi hai')
  constructor(private http:HttpClient) { }

  getDummyData() { // this method inside randomdata service
    const data = this.http.get('https://run.mocky.io/v3/b689249d-9ec1-4150-bdd2-e519712b00ab');
    console.log(data);
    return data;
  }

  changeMessage(msg:string){
    this.messages.next(msg);
  }

  sendData(message) {
    this.checkSub.next(message)
  }
}
