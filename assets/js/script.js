function atualizarDataHora() {
  const dataHoraAtual = new Date();
  const dataFormatada = dataHoraAtual.toLocaleDateString();
  const horaFormatada = dataHoraAtual.toLocaleTimeString();
  
  document.querySelector('.data').innerHTML = dataFormatada;
  document.querySelector('.hora').innerHTML = horaFormatada;
}
const button = document.querySelector(".button");

async function colocarNaTela() {
    const cidade = document.querySelector('.input').value;
    const apiKey = 'cebcd482eda57fa9a6714c1c2ba91885';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    const resposta = await fetch(apiUrl);
    const dados = await resposta.json();

    document.querySelector('.pais').innerHTML = `País: ${dados.sys.country}`;
    document.querySelector('.cidade').innerHTML = `Cidade: ${dados.name}`;
    document.querySelector('.temp').innerHTML = `Temperatura: ${Math.floor(dados.main.temp)}°C`;
    document.querySelector('.descricao').innerHTML = dados.weather[0].description;
    document.querySelector('.umidade').innerHTML = `Umidade: ${dados.main.humidity}%`;
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

    setInterval(atualizarDataHora, 1000);
}
button.addEventListener("click", colocarNaTela);
