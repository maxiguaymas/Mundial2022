import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  logged_in!: boolean;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('token')?.length === environment.token){
      this.logged_in = true;
    }
    else{
      this.logged_in = false;
    }
  }

}
