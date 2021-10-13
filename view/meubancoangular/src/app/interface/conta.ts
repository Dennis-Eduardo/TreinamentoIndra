import { ICliente } from "./cliente";

export interface IConta {
  id: number;
  agencia: string;
  numero: string;
  email: string;
  saldo: string;
  cliente: ICliente;
}
