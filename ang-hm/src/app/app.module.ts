import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { SaluteComponent } from './salute/salute.component';
import { DestinosComponent } from './destinos/destinos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SaluteComponent
    DestinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
