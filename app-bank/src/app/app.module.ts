import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';//adicionado para manipular a data no formato brasileiro
import localePT from '@angular/common/locales/pt';//adicionado para manipular a data no formato brasileiro
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

registerLocaleData(localePT,'pt')//adicionado para manipular a data no formato brasileiro

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide:LOCALE_ID,useValue:'pt'},//adicionado para manipular a data no formato brasileiro
    {provide:DEFAULT_CURRENCY_CODE,useValue:'BRL'}//adicionado para manipular a moeda
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
