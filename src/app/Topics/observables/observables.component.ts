import { Component, OnInit } from '@angular/core';
import { Observable,forkJoin } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

    public checkObs = new Observable((obs)=>{  //observable returns stream of data. always needs to subscribe it
     setTimeout(()=>{
      obs.next('1');
     },1000)
     setTimeout(()=>{
      obs.next('2');
     },2000)
     setTimeout(()=>{
      obs.next('3');
     },3000)
     setTimeout(()=>{
      obs.next('4');
     },4000)
     setTimeout(()=>{
      obs.next('5');
     },5000);

    });

    ngOnInit(): void {
      this.checkObs.subscribe((data)=>{
          console.log(data)
      })
    }
}
