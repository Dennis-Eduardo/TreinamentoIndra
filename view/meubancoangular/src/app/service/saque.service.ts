import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISaqueDeposito } from '../interface/saque-deposito';

@Injectable({
  providedIn: 'root'
})
export class SaqueService {
  endpoint = 'contas/saque';
  api = environment.api;

  constructor(private http: HttpClient) { }

  saque(sacar: ISaqueDeposito){
    return this.http.post(`${this.api}/${this.endpoint}/`, sacar);
  }
}
