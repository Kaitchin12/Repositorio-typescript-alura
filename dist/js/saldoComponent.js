let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoSaldoDataAcesso = document.querySelector(".block-saldo time");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
}
if (elementoSaldoDataAcesso != null) {
    const dataAtualHoje = new Date();
    elementoSaldoDataAcesso.textContent = dataAtualHoje.toLocaleDateString("pt-br", {
        weekday: "long",
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    });
}
