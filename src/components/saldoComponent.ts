import { formatarMoeda } from "../utils/formatadores.js";
import { formatarData } from "../utils/formatadores.js";
import { FormatoData } from "../types/FormatoData.js";

let saldo: number = 3000;


const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoSaldoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;




if (elementoSaldoDataAcesso != null) {
    const dataAtualHoje: Date = new Date();
    elementoSaldoDataAcesso.textContent = formatarData(dataAtualHoje, FormatoData.DIA_SEMANA_MES_ANO);
}

export function getSaldo():number {
    return saldo;
}

atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo:number): void {
 saldo = novoSaldo;
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
}