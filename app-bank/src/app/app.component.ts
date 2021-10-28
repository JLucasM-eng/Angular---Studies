import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-bank';

  constructor(){

  }

  transferencias:any[] = [];
  
  /*transferir($event:any){

    this.service.addTransferencia($event)
    

  }*/
  //Isso foi para o caso de receber os dados da transferencia 
  //pelo evento

}
