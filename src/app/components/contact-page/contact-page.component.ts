import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  public contactForm!: FormGroup;
  send: boolean = false
  constructor(private formBuilder:FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(){
    
    this.contactForm = this.formBuilder.group({
      name: new FormControl(null,[Validators.required,Validators.minLength(2)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      message: new FormControl(null,[Validators.required,Validators.minLength(6),
      ]),
    }
    );
  }

  get f(){
    return this.contactForm.controls;
  }

  sendMessage(form: any){
    console.log(form.value);
    this.userService.sendEmail(form.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    })
    this.send = true;
    
    setTimeout(() => {
      this.send= false;
    }, 2000);

    this.ngOnInit();
  }

}
