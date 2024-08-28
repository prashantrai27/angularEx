import { Component, OnInit,ElementRef,ViewChild,HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of,from, fromEvent, debounceTime,map,filter, tap, switchMap, toArray} from 'rxjs';
import { throttleTime } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit{




  @HostListener('mouseenter') mouseenter() {
    console.log('entered')
    this.setColor(true);
  }
  @HostListener('mouseleave') mouseleave() {
    console.log('left')
    this.setColor(false);
  }


  @ViewChild('btn') ButtonClick: ElementRef
  public studentsData = [
    {
      name:'prashant',age:27
    },
    {
      name:'Om',age:25
    },
    {
      name:'Akshay',age:29
    },
  ];
  public stringArr = ['i','love','Angular']

  sData$ : Observable<any> = of(this.studentsData); //of operator to make array or string or obj as observable
  fromObs$: Observable<any> = from(this.stringArr) // its prints in separate line

  constructor(private fb:FormBuilder) {}
  dummyForm : FormGroup;
  ngOnInit(): void {
    this.dummyForm = this.fb.group({
      name:['prashant']
    })

    this.sData$.subscribe((data)=>{
      console.log(data,'subscribing array,obj,string using of operators')
    })

    // below one we will use for filter operator
    // this.sData$.pipe(
    //   switchMap(items => from(items)),
    //   filter((element: any) => element.age === 25),
    //   toArray()
    // ).subscribe((filteredData) => {
    //   console.log(filteredData, 'output from filter operator');
    // });

    // same using map and filter
    this.sData$.pipe(
       map(val => val.filter((element: any) => element.age >= 27))

      ).subscribe((filteredData) => {
        console.log(filteredData, 'output from filter operator');
      });

    this.fromObs$.subscribe((data)=>{
      console.log(data,'subscribing array or array ike using from operators')
    })

    // below will use debounceTime to reduce api calls
    // this.dummyForm.get('name').valueChanges.pipe(debounceTime(3000)).subscribe((val)=>{
    //   console.log(val,'values')
    // })

    this.dummyForm.get('name').valueChanges.pipe(throttleTime(3000)).subscribe((val)=>{
      console.log(val,'values')
    })
  }

    clickEvnt() {
    const  btnEventObserable$ = fromEvent(this.ButtonClick.nativeElement,'click'); // fromEvent operator

    btnEventObserable$.subscribe((evt)=>{
      console.log(evt,'event')
    })
  }

  setColor(flag){
    let ourElement = document.getElementById('reactive');
    if(flag){
      ourElement?.classList.add('highlight');
    } else {
      ourElement?.classList.remove('highlight');
    }

  }

}
