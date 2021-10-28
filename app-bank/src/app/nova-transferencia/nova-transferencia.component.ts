import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  //@Output() onTransfer = new EventEmitter<any>() para o caso de passar
  //as informações de transferencia no evento do submit

  valor:number;
  destino:number;
  

  constructor(private service:TransferenciaService, private router:Router) { }

  ngOnInit(): void {
  }

  transferir(){
    console.log("Nova Transferencia solicitada!")
    const dataEmit:Transferencia = {valor:this.valor,destino:this.destino}
    this.service.addTransferencia(dataEmit).subscribe((result)=>{
      console.log("result",result)
      this.limparCampos()
      this.router.navigateByUrl('extrato')
    },
    (error)=>{console.error(error)})
    //this.onTransfer.emit(dataEmit)
    
  }

  limparCampos(){
    this.destino=0;
    this.valor=0;
  }

}
