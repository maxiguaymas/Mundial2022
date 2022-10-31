import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(){
    
    this.registerForm = this.formBuilder.group({
      username: new FormControl(null,[Validators.required,Validators.minLength(2)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6),
      ]),
      confirm_password: new FormControl(null,[Validators.required,Validators.minLength(6),
      ])
    },
    {
      validators: this.mustMatch('password','confirm_password')
    } as AbstractControlOptions
    );
  }

  get f(){
    return this.registerForm.controls;
  }

  mustMatch(controlName: string, controlNameMatching: string){
    return(formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[controlNameMatching];

      if(matchingControl.errors && !matchingControl.errors['mustMatch']){
        return
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({mustMatch:true});
      }
      else{
        matchingControl.setErrors(null);
      }

      return;
    }
  }

  register(form:any){
    console.log(form.value);
    this.registerForm.reset();
  }

}
