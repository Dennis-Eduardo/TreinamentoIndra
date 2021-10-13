import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interface/saque-deposito';
import { SaqueService } from 'src/app/service/saque.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  formValue: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)

  });


  constructor(
    private saqueService: SaqueService,
    private router: Router,
    private route: ActivatedRoute
     ) { }

  ngOnInit(): void {

  }

  sacar(){
    const saque: ISaqueDeposito = this.formValue.value;
    console.log("Saque", saque);
    this.saqueService.saque(saque).subscribe(result => {
      Swal.fire('Sucesso', 'Saque Efetuado!', 'success');
      console.log(result)
      this.router.navigate(['/contas']);
    }, error =>{
      Swal.fire('Opss..', 'Erro durante o saque','error')
      console.error(error);

    });
  }

}
