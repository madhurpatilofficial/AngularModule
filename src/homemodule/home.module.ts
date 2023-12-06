import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../app/home/home.component';
import { ContactComponent } from '../app/contact/contact.component';
import { ServicesComponent } from '../app/services/services.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ContactComponent,
    ServicesComponent
  ]
})
export class HomeModule { }
