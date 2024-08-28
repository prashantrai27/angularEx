import { Component, Input,OnChanges, Output, EventEmitter, ViewChild,OnInit, SimpleChanges } from '@angular/core';
import { RandomDataService } from 'src/app/random-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit , OnChanges{
  @Input() dataFromParent: any; // THis value we are getting from parent
  @Output() dataFromChild = new EventEmitter();
  randomMSG: string ='';

  constructor(private randomService:RandomDataService) {}
  ngOnInit(): void {
    this.randomService.currentMsg.subscribe((data)=>{
      this.randomMSG = data;
    });


  }
  public counter = 0;
  assignVal() {
    this.dataFromChild.emit('This is coming from child component');
  }

  sendUsingBehavior() {
    this.randomService.sendData('Aur bhai a gyya swad');
  }
  ngOnChanges(change:SimpleChanges) {
    console.log('changes',change)
  }
  incrementBy1() {
    this.counter++;
  }

}
