import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  abrirSobre(){
    this.loading_sobre = true;
    this.list_numbers = this.randomNumbers();
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

  show(){ //mostrar modal
    this.show_modal = true;
  }

  hide(){ //cerrar modal
    this.show_modal = false;
    this.loading_sobre = false;
    this.open_sobre = false;
  }

}
