import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalsComponent implements OnInit {

  response:any = [];

  constructor(private http:HttpClient, private ref:ChangeDetectorRef){}
  // signals have multiple properties.. we will see one by one
 ngOnInit(): void {
   this.getData();
 }

 getData(){
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
    this.response = data;
    console.log(this.response);
    // this.ref.detectChanges();
  })
 }
}
