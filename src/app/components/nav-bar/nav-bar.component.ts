import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menu_open: boolean = false;
  nav_open: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
        }
      });
  }

}
