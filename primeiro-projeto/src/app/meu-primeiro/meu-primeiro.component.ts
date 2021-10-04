//utilizando o decorator Component para
//auxiliar o compilador. Passaremos dentro dele os metadatas

import { Component } from "@angular/core";

@Component({
    selector:'meu-primeiro-component',//Nome da tag html que a gente vai criar
    template:`<p>Meu primeiro Component com Angular 2</p>`
})

export class MeuPrimeiroComponent {

}//Apenas exportar ainda não é suficiente
/*Toda diretiva, todo pipe, todo componente, todo 
serviço precisa ser declarado em um modulo. Vamos declarar lá
no app.module.*/