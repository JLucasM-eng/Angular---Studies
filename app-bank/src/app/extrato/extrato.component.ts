import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias:Transferencia[];

  constructor(private service:TransferenciaService) { }

  ngOnInit(): void {

    this.service.getAllTransf().subscribe((data:Transferencia[])=>{
      this.transferencias = data
    })
  }


}
