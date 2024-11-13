function atualizarRelogio() {
    const horaAtual = new Date();
    const horas = String(horaAtual.getHours()).padStart(2, "0");
    const minutos = String(horaAtual.getMinutes()).padStart(2, "0");
    const segundos = String(horaAtual.getSeconds()).padStart(2, "0");
    const relogio = document.getElementById("relogio");
    relogio.innerHTML = `${horas}:${minutos}:${segundos}`;
}

function exibirData() {
    const dataAtual = new Date();
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const ano = dataAtual.getFullYear();
    const mes = meses[dataAtual.getMonth()];
    const diaDoMes = dataAtual.getDate();
    const diaDaSemana = diasDaSemana[dataAtual.getDay()];
    const calendario = document.getElementById("calendario");
    calendario.innerHTML = `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano}`;
}

function calcularTempoParaLancamento() {
    const dataLancamento = new Date("2024-10-28T20:00:00");
    const dataAtual = new Date();
    const diff = dataLancamento - dataAtual;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    const contagem = document.getElementById("contagem");
    contagem.innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    document.getElementById("data-lancamento").innerText = dataLancamento.toLocaleString("pt-BR", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
exibirData();
setInterval(calcularTempoParaLancamento, 1000);
calcularTempoParaLancamento();
