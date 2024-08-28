import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-timer',
  templateUrl: './normal-timer.component.html',
  styleUrls: ['./normal-timer.component.scss']
})
export class NormalTimerComponent implements OnInit {
  public Timer = 0;
 public timer;
 public stop = false;
  ngOnInit(): void {}

  startTimer(){

    if(this.Timer == 0) {
        this.stop = false;
        this.timerFn();
    } else if(this.stop) {
      this.stop = false;
      this.timerFn();
    }
    console.log(this.Timer,'Start')
  }

  timerFn(){
      this.timer = setInterval(()=>{
        if(this.Timer < 15){
          this.Timer++;
        } else {
          clearInterval(this.timer);
        }
        console.log('inside setTimeout')
      },1000)

  }

  stopTimer() {
    clearInterval(this.timer);
    console.log(this.Timer,'Stop');
    this.stop = true;
  }

  resetTimer() {
    clearInterval(this.timer);
    this.Timer = 0;
    console.log(this.Timer,'Reset')
  }
}
