import { Transacao } from "../utils/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";

let saldo : number = 3000;



const Conta = {
    getSaldo: function() : number {
        return saldo;
},

    getDataAcesso : function() : Date {
        return new Date();
    },

    registrarTransacao : function(novaTransacao : Transacao) : void {
      if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
             saldo += novaTransacao.Valor;

         } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAG_BOLETO) {
             saldo -= novaTransacao.Valor;

         } else {
             alert("Tipo de Transação é inválido!");
             return;
         }
         console.log(novaTransacao);    
    }

    
}

export default Conta;