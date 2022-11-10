import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AlbumPageComponent } from './album-page/album-page.component';
import { MaterialModule } from '../material/material.module';
import { FiguritaComponent } from './figurita/figurita.component';
import { ModalSobreComponent } from './modal-sobre/modal-sobre.component';


@NgModule({
  declarations: [
    AlbumPageComponent,
    FiguritaComponent,
    ModalSobreComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
