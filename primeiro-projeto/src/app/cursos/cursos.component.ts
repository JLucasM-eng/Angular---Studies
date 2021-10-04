import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

   linkCursos:string
   list:string[]
   

  constructor(private cursosService:CursosService) { 
    this.linkCursos='http://google.com'
    this.list = this.cursosService.getCursos();

    
    //var servico = new CursosService(); NÃO PRECISA por causa do Injectable
  }
   
   

  ngOnInit(): void {

  } 

}
