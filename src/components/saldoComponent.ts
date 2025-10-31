import { formatarMoeda } from "../utils/formatadores.js";
import { formatarData } from "../utils/formatadores.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";




const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoSaldoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;




if (elementoSaldoDataAcesso != null) {
    const dataAtualHoje: Date = new Date();
    elementoSaldoDataAcesso.textContent = formatarData(dataAtualHoje, FormatoData.DIA_SEMANA_MES_ANO);
}


//chamando a função 
renderizarSaldo();

 function renderizarSaldo(): void {
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
}
}

const saldoComponent = {
    atualizar: function(): void {
        renderizarSaldo();
    }
}

export default saldoComponent;