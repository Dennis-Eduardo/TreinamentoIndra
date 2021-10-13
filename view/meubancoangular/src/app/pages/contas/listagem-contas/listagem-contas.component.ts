import { Component, OnInit } from '@angular/core';
import { IConta } from 'src/app/interface/conta';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-listagem-contas',
  templateUrl: './listagem-contas.component.html',
  styleUrls: ['./listagem-contas.component.css']
})
export class ListagemContasComponent implements OnInit {

  contas: IConta[] = [];
  constructor(private contasService: ContasService) { }

  ngOnInit(): void {
    this.contasService.listarTodasContas().subscribe((result: IConta[]) =>{
      this.contas = result;
    }, error => {
      console.error(error)
    }
    )
  }

}
