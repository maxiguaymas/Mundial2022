import { Component } from '@angular/core';
import { fader, slideInAnimation} from './animations/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation, fader]
})
export class AppComponent {
  title = 'AppMundial2022';
  view: boolean = true;
  
  onActive(){
    window.scroll(0,0);
  }
}
