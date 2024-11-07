const apiKey = '73703404c8133d07ec0decc35140b4be'; // Substitua pela sua chave API do OpenWeatherMap
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                document.getElementById('weather').innerHTML = `
                    <h3>Clima em ${city}</h3>
                    <p>Temperatura: ${temperature}°C</p>
                    <p>Descrição: ${description}</p>
                    <p>Umidade: ${humidity}%</p>
                    <p>Velocidade do vento: ${windSpeed} m/s</p>
                `;
            } else {
                document.getElementById('weather').innerHTML = `<p>Não foi possível encontrar informações sobre o clima para ${city}. Verifique o nome da cidade.</p>`;
            }
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
            document.getElementById('weather').innerHTML = '<p>Ocorreu um erro ao buscar a previsão do tempo.</p>';
        });
}
