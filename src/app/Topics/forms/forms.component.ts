import { Component,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public nameVal:string = '';
  public passwordVal:string = '';
  public errorMsg = 'Username must be greater than 3 chars';
  // @HostListener('click') onclick() {
  //   document.getElementById('reactive').classList.add('highlight');
  // }

  newForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.newForm = this.fb.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      email:['',Validators.required,Validators.email],
      address: this.fb.group({
          city:['',Validators.required]
      })
    });

    const usernameControl = this.newForm.get('name');

    usernameControl.valueChanges.subscribe((data)=>{
      console.log(data,'value of data in inuts')
    })
  }


 onSubmit(data:any) {
  console.log(data,'formData')
 }
 onSubmitReactiveForm(data:any) {
  console.log(data,'Reactive formData')
 }
}
