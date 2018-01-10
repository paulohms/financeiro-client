import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { FinancasService } from './../financas/financas.service';
import { Financa } from './../financas/financa';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  financas: Financa[] = [];
  inscricao: Subscription;
  mensagemSucesso: any;
  mensagemError: any;
  qtdDespesa:number = 0;
  qtdReceita:number = 0;
  pieChartLabels:string[] = ['Despesa', 'Receita'];
  pieChartData:number[] = [];
  pieChartType:string = 'pie';
  isDataAvailable:boolean = false;

  constructor(
              private financasService : FinancasService,
              private router: Router
              ) { }

  ngOnInit() {
    this.limpaVariaveisGrafico();
    this.financasService.getFinancas().subscribe(
      financas => {
        this.financas = financas;
        this.calculaGrafico(this.financas);
      },
      error => this.mensagemError = "Erro ao consumir o serviço"
    );
    this.mensagemSucesso = "";

  }
  
  ngOnDestroy() {
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }

  deletar(financa:Financa){

    this.isDataAvailable = false;
    this.limpaVariaveisGrafico();

    this.financasService.delFinanca(financa.id).subscribe(
      financas => {
        this.mensagemSucesso = "Registro deletado com sucesso";
        this.financasService.getFinancas().subscribe(
          financas => {
            this.financas = financas;
            this.calculaGrafico(this.financas);
          },
        );
      },
      error =>{
        this.mensagemError = "Erro ao deletar registro";
      }
    );

  }
  
  // calcula os indices do grafico
  calculaGrafico(financas:Financa[]):void{
    
    for(let finan of this.financas){
      if(finan.tipo == 'RECEITA'){
        this.qtdReceita += 1;
      }
      else{
        this.qtdDespesa +=1;
      }
    }
    this.pieChartData[0] = this.qtdDespesa;
    this.pieChartData[1] = this.qtdReceita;
    this.isDataAvailable = true;

  }

  //limpa as variaveis dos graficos para ficarem atualizadas
  limpaVariaveisGrafico():void{
    this.qtdDespesa = 0;
    this.qtdReceita = 0;
    this.pieChartData = [];
  }

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
