import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { FinancasService } from './../financas.service';
import { Financa } from './../financa';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  financa: Financa;
  mensagemSucesso: any;
  mensagemError: any;
  inscricao: Subscription;

  salvar(){
    if(this.financa.descricao && this.financa.valor && this.financa.tipo){
      this.inscricao = this.financaService.addFinanca(this.financa)
        .subscribe(
          financa => {
            this.mensagemSucesso = "Registro inserido com sucesso";
            this.financa = new Financa();
            this.mensagemError = "";
          },
          error => {
            this.mensagemError = "Erro ao inserir registro";
            this.mensagemSucesso = "";
          }
        )
    }
    else {
      this.mensagemError = "Preencha todos os campos!";
      this.mensagemSucesso = "";
    }
  }

  constructor(private financaService: FinancasService,  private router: Router) {
   
  }

  ngOnInit() {
    this.financa = new Financa();
    this.mensagemSucesso = "";
    this.mensagemError =  "";
  }
  ngOnDestroy() {
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }

}
