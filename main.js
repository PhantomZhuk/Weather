const KEY = `54b004d37751b297c1fca5ed1171766e`
$(`.infoContainer`).hide();
let advArray = [{
    temp: `< -20`,
    dry: `Thermal underwear, woolen sweater, warm jacket, insulated pants, hat, gloves, scarf, warm shoes.`,
    rain: `Thermal underwear, waterproof jacket, insulated pants, hat, gloves, scarf, warm waterproof shoes.`
},
{
    temp: `< 0`,
    dry: `Thermal underwear, woolen sweater, warm jacket, hat, gloves, scarf, warm shoes.`,
    rain: `Thermal underwear, waterproof jacket, hat, gloves, scarf, warm waterproof shoes.`
},
{
    temp: `< 10`,
    dry: `Wear layers of clothing, a warm jacket, hat and gloves.`,
    rain: `Layers, waterproof clothing, warm shoes, umbrella, hat and gloves.`
},
{
    temp: `< 20`,
    dry: `Light jacket or sweater, jeans, comfortable shoes.`,
    rain: `Light waterproof jacket, umbrella, closed shoes.`
},
{
    temp: `< 25`,
    dry: `T-shirt, light pants or shorts, comfortable shoes.`,
    rain: `Lightweight waterproof jacket or raincoat, umbrella.`
},
{
    temp: `< 30`,
    dry: `Light T-shirt, shorts, hat, sunglasses.`,
    rain: `Lightweight waterproof jacket or raincoat, umbrella.`
},
{
    temp: `> 30`,
    dry: `Light T-shirt, shorts, hat, sunglasses, drinking water.`,
    rain: `Lightweight waterproof jacket or raincoat, umbrella, hat.`
}
]

$(`#search`).click(() => {
    let currentCity = $(`#city`).val();

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${KEY}`)
        .then(res => {
            $(`#actualTemperatura`).text((res.data.main.temp - 273).toFixed(`2`));
            $(`#feelsLikeTemperatura`).text((res.data.main.feels_like - 273).toFixed(`2`));
            $(`#tusk`).text(res.data.main.pressure);
            $(`#humidity`).text(res.data.main.humidity);
            $(`#windSpeed`).text(res.data.wind.speed);
            $(`#windDeg`).css(`transform`, `rotate(${res.data.wind.deg}deg)`)
            $(`#country`).text(res.data.sys.country);
            $(`#nameCity`).text(res.data.name);
            $(`#weather`).text(res.data.weather[0].description);
            $(`#flagCountry`).css(`background-image`, `url(https://flagsapi.com/${res.data.sys.country}/flat/64.png)`);
            if (res.data.main.temp - 273 > 10) {
                $(`.wrap`).css(`background`, `linear-gradient(to bottom left, #ff7e5f, #feb47b)`);
            } else {
                $(`.wrap`).css(`background`, `linear-gradient(to bottom left, #00c6ff, #0072ff)`);
            }
            
        

            if (res.data.weather[0].main === 'Rain' || res.data.weather[0].main === 'Snow') {
                if (res.data.main.temp - 273 < -20) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[0] ? advArray[0].rain : '');
                } else if (res.data.main.temp - 273 < 0) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[1] ? advArray[1].rain : '');
                } else if (res.data.main.temp - 273 < 10) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[2] ? advArray[2].rain : '');
                } else if (res.data.main.temp - 273 < 20) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[3] ? advArray[3].rain : '');
                } else if (res.data.main.temp - 273 < 25) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[4] ? advArray[4].rain : '');
                } else if (res.data.main.temp - 273 <= 30) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[5] ? advArray[5].rain : '');
                } else if (res.data.main.temp - 273 > 30) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[6] ? advArray[6].rain : '');
                }
            } else {
                if (res.data.main.temp - 273 < -20) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[0] ? advArray[0].dry : '');
                } else if (res.data.main.temp - 273 < 0) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[1] ? advArray[1].dry : '');
                } else if (res.data.main.temp - 273 < 10) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[2] ? advArray[2].dry : '');
                } else if (res.data.main.temp - 273 < 20) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[3] ? advArray[3].dry : '');
                } else if (res.data.main.temp - 273 < 25) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[4] ? advArray[4].dry : '');
                } else if (res.data.main.temp - 273 <= 30) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[5] ? advArray[5].dry : '');
                } else if (res.data.main.temp - 273 > 30) {
                    $('#Advice').empty();
                    $('#Advice').text(advArray[6] ? advArray[6].dry : '');
                }
            }
        });
    if ($(`#city`).val().length > 0) {
        $(`.infoContainer`).show();
    }
});