import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-js-concepts',
  templateUrl: './js-concepts.component.html',
  styleUrls: ['./js-concepts.component.scss']
})
export class JsConceptsComponent implements OnInit {

  public sampleArray = [1,2,3];
  public sampleArray2 = {a:1,b:2,c:3}
ngOnInit() {
  for(let val of this.sampleArray){  // for..of is used for array
    console.log(val,'for..of');
  }

  for(let val in this.sampleArray){ // for..in for obj ... here it printed array element index
    console.log(val,'for..in');
  }

  for(let val in this.sampleArray2){ // for..in for obj ... here it printed array element index
    console.log(val,'for..in');  // for..in is more suitable for objects
  }

}


}
