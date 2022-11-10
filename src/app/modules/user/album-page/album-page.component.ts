import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { paises } from '../paises';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss'],
})
export class AlbumPageComponent implements OnInit {
  user!: User;
  album!: Album;
  paises: string[] = paises;
  paisActual:number = 0;
  select_paises_open = false;
  spinner:boolean = false;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAlbum('maxi@gmail.com').subscribe({
      next: (response:any) => {
        this.user= response.user;
        console.log(this.user);
        this.album = this.user.album;
      },
      error: (error) => {
        console.error(`error : ${error}`)
      },
      complete: () => console.log('peticion completada')
    })
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
