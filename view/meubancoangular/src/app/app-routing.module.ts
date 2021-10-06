import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEdicaoClientesComponent } from './pages/clientes/cadastro-edicao-clientes/cadastro-edicao-clientes.component';
import { ListagemClientesComponent } from './pages/clientes/listagem-clientes/listagem-clientes.component';
import { ListagemContasComponent } from './pages/contas/listagem-contas/listagem-contas.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/clientes', pathMatch: 'full'
  },

  {
    path: 'clientes', component: ListagemClientesComponent

  },
  {
    path: 'clientes/cadastrar', component: CadastroEdicaoClientesComponent
  },
  {
    path: 'contas', component: ListagemContasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
