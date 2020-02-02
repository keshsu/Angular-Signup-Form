import { Component, OnInit } from '@angular/core';

import { Signup} from '../signup';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent  {
  status = ['active', 'not-active'];

  model = new Signup('master','master','active');

  submitted = false;

  onSubmit(){this.submitted = true;}


  newSignup(){
      this.model = new Signup('','');
  }
}
