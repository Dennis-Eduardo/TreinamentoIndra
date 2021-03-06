import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IConta } from '../interface/conta';

@Injectable({
  providedIn: 'root'
})
export class ContasService {
  endpoint = 'contas/';
  api = environment.api;

  constructor(private http: HttpClient) { }

  listarTodasContas(): Observable<IConta[]>{
    return this.http.get<IConta[]>(`${this.api}/${this.endpoint}`);
  }
}
