import { Component, OnInit } from '@angular/core';
import { RandomDataService } from 'src/app/random-data.service';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit{
    public message:string;
    constructor(private service:RandomDataService) {}
  // in this we wil get the data from the child of the dependency injection component
  ngOnInit() {
    this.service.checkSub.subscribe((data)=>{this.message = data})
  }
}
