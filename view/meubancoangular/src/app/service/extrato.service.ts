import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IExtrato } from '../interface/extrato';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {
  endpoint = 'contas/emitir-extrato/';
  api =  environment.api;

  constructor(private http: HttpClient) { }

  listarTodosExtratos(agencia: string, numConta: string): Observable<IExtrato[]> {
    return this.http.get<IExtrato[]>(`${this.api}/${this.endpoint}/${agencia}/${numConta}`);
  }


}
