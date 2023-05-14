const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const lancamento = "27 jul 2023";

function countDown() {
    const dataLancamento = new Date(lancamento);
    const dataAtual = new Date();

    const segTotal = (dataLancamento - dataAtual)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60 / 24) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = formatTme(finalDias) + 'D';
    hora.innerHTML = formatTme(finalHoras) + 'H';
    minuto.innerHTML = formatTme(finalMinutos) + 'M';
    segundo.innerHTML = formatTme(finalSegundos) + 'S';
}

function formatTme (tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}

setInterval(countDown, 1000);