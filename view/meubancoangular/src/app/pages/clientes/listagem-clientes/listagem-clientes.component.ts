import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interface/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.css']
})
export class ListagemClientesComponent implements OnInit {

  clientes: ICliente[] = [];
  constructor(private clienteService: ClienteService ) { }

  ngOnInit(): void {
    this.listarTodos()

  }

  listarTodos(){
    this.clienteService.listarTodosClientes().subscribe((result: ICliente[]) => {
      this.clientes = result;
    });
  }
    confirmar(id: number) {
      console.log(id);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.clienteService.remover(id).subscribe(result => {
            Swal.fire(
              'Excluído!',
              'A conta foi excluído.',
              'success'
            )
          }, error => {
            console.error(error);
          });
        }
      })
    }

  }


