const API_KEY = `1f5131dbceeefdaea6587afce1bcf056`;
const searchTemperature = () => {
    const city =  document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=1f5131dbceeefdaea6587afce1bcf056&units=metric`;
    console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp)
    console.log(temperature)
}