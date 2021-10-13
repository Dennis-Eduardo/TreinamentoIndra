import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemClientesComponent } from './clientes/listagem-clientes/listagem-clientes.component';
import { CadastroEdicaoClientesComponent } from './clientes/cadastro-edicao-clientes/cadastro-edicao-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { ListagemContasComponent } from './contas/listagem-contas/listagem-contas.component';
import { SaqueComponent } from './caixa-eletronico/saque/saque.component';
import { DepositoComponent } from './caixa-eletronico/deposito/deposito.component';
import { TransferenciaComponent } from './caixa-eletronico/transferencia/transferencia.component';



@NgModule({
  declarations: [
    ListagemClientesComponent,
    CadastroEdicaoClientesComponent,
    ListagemContasComponent,
    SaqueComponent,
    DepositoComponent,
    TransferenciaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
