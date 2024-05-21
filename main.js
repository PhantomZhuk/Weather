const KEY = `54b004d37751b297c1fca5ed1171766e`
$(`.infoContainer`).hide()

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

            if (res.data.main.temp - 273 > 10){
                $(`.wrap`).css(`background`, `linear-gradient(to bottom left, #ff7e5f, #feb47b)`);
            }else{
                $(`.wrap`).css(`background`, `linear-gradient(to bottom left, #00c6ff, #0072ff)`);
            }
        });
    if ($(`#city`).val().length > 0){
        $(`.infoContainer`).show();
    }
});