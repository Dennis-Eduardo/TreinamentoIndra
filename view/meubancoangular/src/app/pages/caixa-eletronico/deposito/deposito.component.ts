import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interface/saque-deposito';
import { DepositoService } from 'src/app/service/deposito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  formValue: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)

  });

  constructor(
    private depositoService: DepositoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  depositar(){
    const deposito: ISaqueDeposito = this.formValue.value;
    console.log("Deposito", deposito);
    this.depositoService.deposito(deposito).subscribe(result => {
      Swal.fire('Sucesso', 'Deposito Efetuado!', 'success');
      console.log(result)
      this.router.navigate(['/contas']);
    }, error =>{
      Swal.fire('Opss..', 'Erro durante o deposito','error')
      console.error(error);
    });

  }

}
