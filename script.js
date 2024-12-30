const searchBtn = document.getElementById('searchBtn')
async function handleWeatherAPI(){
    try{
    const cityInput = document.getElementById('searchInput').value.toLowerCase();
    const cityName = document.getElementById('city');
    const temperature = document.getElementById('temperature');
    const wind = document.getElementById('wind');
    const humidity = document.getElementById('humidity');
    const weather = document.getElementById('weather');
    const weatherImg = document.getElementById('weatherImg')

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=ae3b51c2f7bfd78faebfb683c718576e&units=metric`)
    if(!response.ok){
        throw new Error('Can not fetch this certain city')
    }       
        const responseData = await response.json();
        cityName.textContent = responseData.name + "/" + responseData.sys.country;
        temperature.textContent = Math.round(responseData.main.temp) + '\u00B0C';
        wind.textContent = responseData.wind.speed + 'km/h';
        humidity.textContent = responseData.main.humidity + "%";
        weather.textContent = responseData.weather[0].main; 
        console.log(weather);


        if(weather.textContent === "Snow"){
            weatherImg.src = "images/snow.png";
            weather.textContent = "Snowy";
        }else if(weather.textContent === "Rain"){
            weatherImg.src = "images/rainy.png";
            weather.textContent = "Rainy";
        }else if(weather.textContent === "Mist"){
            weatherImg.src = "images/misty.png";
            weather.textContent = "Misty";
        }else if(weather.textContent === "Clouds"){
            weatherImg.src = "images/cloudy.png";
            weather.textContent = "Cloudy";
        }else if(weather.textContent === "Clear"){
            weatherImg.src = "images/sunny.png";
            weather.textContent = "Clear";
        }
        console.log(responseData)
        console.log(cityInput);
    }
    
    catch(error){
        throw new Error('Error occured')
    }
}

searchBtn.addEventListener('click', ()=>{
    handleWeatherAPI();
})
