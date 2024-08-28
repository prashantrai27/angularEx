import { Component } from '@angular/core';

@Component({
  selector: 'app-content-projection-parent',
  templateUrl: './content-projection-parent.component.html',
  styleUrls: ['./content-projection-parent.component.scss']
})
export class ContentProjectionParentComponent {
  public cars = [
    {name:"Audi",model:"Q4"},
    {name:"Maruti",model:"Dzire"},
    {name:"Tata",model:"Nexon"},
  ]
  public bikes = [
    {name:"TVS",model:"Jupiter"},
    {name:"Honda",model:"Aviator"},
    {name:"Yamaha",model:"something"},
  ]
}
