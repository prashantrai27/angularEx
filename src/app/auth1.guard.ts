import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate {
  canActivate() {
    //window.alert('Access not granted')
    return true;
  }

}
