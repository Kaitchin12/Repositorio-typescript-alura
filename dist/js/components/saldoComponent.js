import { formatarMoeda } from "../utils/formatadores.js";
import { formatarData } from "../utils/formatadores.js";
import { FormatoData } from "../types/FormatoData.js";
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoSaldoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldoDataAcesso != null) {
    const dataAtualHoje = new Date();
    elementoSaldoDataAcesso.textContent = formatarData(dataAtualHoje, FormatoData.DIA_SEMANA_MES_ANO);
}
export function getSaldo() {
    return saldo;
}
atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}
