import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Album } from 'src/app/models/album';
import { Jugador } from 'src/app/models/jugador';
import { AppState } from 'src/app/state/app.state';
import { userAlbumUpdateAction } from 'src/app/state/user/user.actions';
import { selectUserAlbum } from 'src/app/state/user/user.selectors';

@Component({
  selector: 'app-modal-sobre',
  templateUrl: './modal-sobre.component.html',
  styleUrls: ['./modal-sobre.component.scss']
})
export class ModalSobreComponent implements OnInit {
  loading_sobre: boolean = false;
  open_sobre: boolean = false;
  show_modal: boolean = false;
  list_numbers!: number[];
  list_figuritas: Jugador[] = [];
  album!: Album;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  abrirSobre(){
    this.loading_sobre = true;
    this.store.select(selectUserAlbum).subscribe(
      (album) =>{
        this.album = album!;
      }
    );
    console.log(this.album);
    this.list_numbers = this.randomNumbers();
    this.updateAlbum();
    setTimeout(() => {
      this.loading_sobre= false;
      this.open_sobre= true;
    }, 2000);
  }

  randomNumbers(){
    let list_numbers = [];
    for (let index = 0; index < 5; index++) {
      list_numbers[index] = Math.floor(Math.random() * 575) + 1 ;
    }
    console.log(list_numbers);
    return list_numbers;
  }

  updateAlbum(){
    // Object.(this.album);
    let album: Album = JSON.parse(JSON.stringify(this.album));
    for (let i = 0; i < this.list_numbers.length; i++) {
      for (let ind = 0; ind < album.paises.length; ind++) {
        for (let index = 0; index < album.paises[ind].jugadores.length; index++) {
          if(album.paises[ind].jugadores[index].jug_id === this.list_numbers[i]){
            this.list_figuritas.push(JSON.parse(JSON.stringify(album.paises[ind].jugadores[index])));
            if(album.paises[ind].jugadores[index].in_album === false){
              album.paises[ind].jugadores[index].in_album = true;
              album.paises[ind].fig_completadas++;
              album.fig_completadas++;
            }
            

          }
          
        }
        
      }
      
    };
    this.album = album;
    console.log(this.list_figuritas);
    console.log(this.album);
  }

  show(){ //mostrar modal
    this.show_modal = true;
  }

  hide(){ //cerrar modal
    this.store.dispatch(userAlbumUpdateAction({album: this.album}));
    this.show_modal = false;
    this.loading_sobre = false;
    this.open_sobre = false;
    this.list_figuritas = [];
  }

}
