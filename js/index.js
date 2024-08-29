const diaSemana = document.getElementById("dia-semana");
const diaMesAno= document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");


// Todo conjunto numérico (exceto ano ) deve ter 2 digitos (adicionar 0 se for menor q 10)
// Retornar dia da semana por extenso(em pt-br)

function diaSemana(){
    // retornar dia da semana
}

function dataCompleta() {
    const date = new Date();
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}

function horaCompleta() {
    const date = new date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

diaMesAno.textContent = dataCompleta();
horaMinSeg.textContent = horaCompleta();