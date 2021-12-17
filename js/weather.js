

const API_KEY = "1f5d83265b73aaac22fdb09d218b2a82"

const city_name = "seoul"


function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.latitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(URL)
        .then((Response) => Response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
            });

}
function onGeoError(){
    alert("Can't find tou. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError)