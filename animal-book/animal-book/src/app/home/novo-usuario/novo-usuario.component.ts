import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!:FormGroup
//serviço do angular para trabalhar com formularios reativos no contructor
  constructor(
    private formBuilder:FormBuilder, 
    private novoUsuarioService:NovoUsuarioService,
    private usuarioExistenteService:UsuarioExisteService,
    private router:Router) { }

  ngOnInit(): void {

    this.novoUsuarioForm=this.formBuilder.group({
      email:['',[
        Validators.required,
        Validators.email
      ]],
      fullName:['',[
        Validators.required,
        Validators.minLength(4),
      ]],
      userName:['',[
        minusculoValidator
      ],[
        this.usuarioExistenteService.usuarioExiste()
      ]],
      password:['']
    })

  }
  
  cadastrar(){
    if(this.novoUsuarioForm.valid){
      const novoUsuario=this.novoUsuarioForm.getRawValue() as NovoUsuario
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(()=>{
        this.router.navigate([''])
      },(error)=>{
        console.log(error)
      })
    }
    
    
  }

}
