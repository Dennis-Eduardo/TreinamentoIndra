import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISaqueDeposito } from '../interface/saque-deposito';

@Injectable({
  providedIn: 'root'
})
export class DepositoService {
  endpoint = 'contas/deposito';
  api = environment.api;

  constructor(private http: HttpClient) { }

  deposito(depositar: ISaqueDeposito){
    return this.http.post(`${this.api}/${this.endpoint}/`, depositar);
  }
}
