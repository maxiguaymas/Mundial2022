import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RegisterData } from 'src/app/models/register-data';
import { AppState } from 'src/app/state/app.state';
import { registerAction } from 'src/app/state/auth/register/register.actions';
import { selectErrorRegister, selectLoadingRegister } from 'src/app/state/auth/register/register.selectors';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public registerForm!: FormGroup;
  public isLoading$: Observable<boolean>;
  public isError$: Observable<string | null>;

  constructor(private formBuilder:FormBuilder, private store: Store<AppState>) {
    this.isLoading$ = this.store.select(selectLoadingRegister);
    this.isError$ = this.store.select(selectErrorRegister);
  }

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
    let {username,email,password} = form.value;
    let data: RegisterData = {username,email,password}
    this.store.dispatch(registerAction({data}));
    // this.registerForm.reset();
  }

}
