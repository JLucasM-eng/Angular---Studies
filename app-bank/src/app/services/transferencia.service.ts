import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listTransferencias:any[]
  private url:string="http://localhost:3000/transferencias"

  constructor(private httpClient:HttpClient) {
    this.listTransferencias = []
   }

   get transferencias(){
     return this.listTransferencias
   }

  addTransferencia(transferencia:Transferencia):Observable<Transferencia>{
    this.hydrate(transferencia)
    return this.httpClient.post<Transferencia>(this.url,transferencia)
  }

  private hydrate(transferencia:any){
    transferencia.data = new Date()
  }

  getAllTransf():Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

}
