import { formatarMoeda } from "../utils/formatadores.js";
import { formatarData } from "../utils/formatadores.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoSaldoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldoDataAcesso != null) {
    const dataAtualHoje = new Date();
    elementoSaldoDataAcesso.textContent = formatarData(dataAtualHoje, FormatoData.DIA_SEMANA_MES_ANO);
}
//chamando a função 
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const saldoComponent = {
    atualizar: function () {
        renderizarSaldo();
    }
};
export default saldoComponent;
