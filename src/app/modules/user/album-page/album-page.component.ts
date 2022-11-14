import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AppState } from 'src/app/state/app.state';
import { userAlbumAction } from 'src/app/state/user/user.actions';
import { selectLoadingUserAlbum, selectUserAlbum, selectErrorUserAlbum } from 'src/app/state/user/user.selectors';
import { paises } from '../paises';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss'],
})
export class AlbumPageComponent implements OnInit {
  user!: User;
  album!: Album ;
  paises: string[] = paises;
  paisActual:number = 0;
  select_paises_open = false;
  spinner:boolean = false;
  email!: string;
  public isLoading$: Observable<boolean>;
  public isError$: Observable<string | null>;
  
  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.select(selectLoadingUserAlbum);
    this.isError$ = this.store.select(selectErrorUserAlbum);
   }
  ngOnInit(): void {
    this.email = localStorage.getItem('email')!;
    this.store.dispatch(userAlbumAction({email: this.email}));
    
    this.store.select(selectUserAlbum).subscribe(
      (album) =>{
        this.album = album!;
      }
    )

  }

  actualizarPais(i:number){
    console.log(i);
    this.paisActual = i;
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 700);
  }

}
