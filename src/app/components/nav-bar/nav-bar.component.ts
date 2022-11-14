import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  username!: string;
  logged_in!: boolean;
  menu_open: boolean = false;
  nav_open: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username')!;

    if(localStorage.getItem('token')?.length === environment.token){
      this.logged_in = true;
    }
    else{
      this.logged_in = false;
    }

    
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)  
      ).subscribe((event: any) => {
        // console.log(event.url);

        // controlo en que url de la web me encuentro para mostrar o no el navbar
        if(event.url === '/login' || event.url === '/register'){
          this.nav_open = false;
        }
        else{
          this.nav_open = true;
          this.ngOnInit();
        }
      });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
