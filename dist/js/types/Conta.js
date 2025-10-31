import { TipoTransacao } from "../types/TipoTransacao.js";
let saldo = 3000;
const Conta = {
    getSaldo: function () {
        return saldo;
    },
    getDataAcesso: function () {
        return new Date();
    },
    registrarTransacao: function (novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.Valor;
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAG_BOLETO) {
            saldo -= novaTransacao.Valor;
        }
        else {
            alert("Tipo de Transação é inválido!");
            return;
        }
        console.log(novaTransacao);
    }
};
export default Conta;
