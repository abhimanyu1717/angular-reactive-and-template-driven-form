import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HighLightDirective} from './structucal.directive';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  constructor(private fb: FormBuilder){}
  ngOnInit() {
   
  }
  /********** Reactive form using  FormGroup service ***************/ 
  profileForm = new FormGroup({
    fname:new FormControl('', [
      Validators.required,
      Validators.minLength(5)
      ]
      ),
    lname:new FormControl('')
  });
  customValidator(){
    console.log('custom validator called');
   return {'aaa': true};
  }
  submit() {
    alert(JSON.stringify(this.profileForm.value));
  }


  /********** Reactive form using FormBuilder service ***************/

  profileFormFB =this.fb.group({
    fbFName:['',[Validators.required,this.customValidatorFB]],
    fbLName:['']
  });

  submitFB() {
    alert(JSON.stringify(this.profileFormFB.value));
  }
  customValidatorFB(){
    console.log('fb custom validator called');
   return null
  }
}
