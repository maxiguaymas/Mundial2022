import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-figurita',
  templateUrl: './figurita.component.html',
  styleUrls: ['./figurita.component.scss']
})
export class FiguritaComponent implements OnInit {
  @Input() jugador: any;
  @Input() modal!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
