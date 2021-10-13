import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransferencia } from 'src/app/interface/transferencia';
import { TransferenciaService } from 'src/app/service/transferencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  formValue: FormGroup = new FormGroup({
    agenciaDestino: new FormControl('', Validators.required),
    agenciaOrigem: new FormControl('', Validators.required),
    numeroContaDestino: new FormControl('', Validators.required),
    numeroContaOrigem: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),

  })

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  transferir(){
    const transferencia: ITransferencia = this.formValue.value;
    console.log("Transferencia", transferencia);
    this.transferenciaService.transferencia(transferencia).subscribe(result => {
      Swal.fire('Sucesso', 'Transferência Efetuada!', 'success');
      console.log(result)
      this.router.navigate(['/contas']);
    }, error =>{
      Swal.fire('Opss..', 'Erro durante a transferência','error')
      console.error(error);
    });

  }

}
