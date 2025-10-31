import { TipoTransacao } from "../types/TipoTransacao.js";

export type Transacao = {
    tipoTransacao : TipoTransacao;
    Valor : number;
    Data : Date;
}