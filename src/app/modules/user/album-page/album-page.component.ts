import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { paises } from '../paises';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {
  user: any;
  paises: string[] = paises;
  paisActual:number = 0;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAlbum('maxi@gmail.com').subscribe({
      next: (response:any) => {
        this.user= response.user;
        console.log(this.user);
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
  }

}
