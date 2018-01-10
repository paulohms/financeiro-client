import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app.routing.module';

import { FinancasService } from './financas/financas.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [
    FinancasService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
