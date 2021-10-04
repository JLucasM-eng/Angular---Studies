import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

// Se eu for trabalhar com requisições ajax
//eu preciso importar o BrowserModule, FormsModule e HttpModule

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent,
    CursoDetalheComponent
  ],
  providers:[CursosService]
})
export class CursosModule { }
