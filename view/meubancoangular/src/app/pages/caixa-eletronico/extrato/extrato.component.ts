import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IExtrato } from 'src/app/interface/extrato';
import { ExtratoService } from 'src/app/service/extrato.service';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  extratos: IExtrato[] = [];
  constructor(
    private extratoService: ExtratoService,
    private contaService: ContasService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const agencia = this.route.snapshot.paramMap.get('agencia');
    const numConta = this.route.snapshot.paramMap.get('numConta');
    this.listarTodos(agencia!,numConta!);

  }

  listarTodos(agencia:string, numConta:string){
    this.extratoService.listarTodosExtratos(agencia,numConta).subscribe((result: IExtrato[]) =>{
      this.extratos = result;
    });
  }

}
