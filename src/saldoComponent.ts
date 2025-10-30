let saldo: number = 3000;


const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoSaldoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;


if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
}

if (elementoSaldoDataAcesso != null) {
    const dataAtualHoje: Date = new Date();
    elementoSaldoDataAcesso.textContent = dataAtualHoje.toLocaleDateString("pt-br", {
        weekday: "long",
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    });
}
