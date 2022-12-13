const API_KEY = `3265874a2c77ae4a04bb96236a642d2f` ;
// url  
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`  


// Selectors  
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
const form = document.querySelector("#form");

const getWeather = async (city) =>{
     weather.innerHTML = `<h2>Loading...</h2`;
     const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
     const data = await response.json();
    //  console.log(data);
     return showWeather(data);
}

const showWeather = (data) =>{
    if(data.cod == '404'){
        weather.innerHTML = `<h2>${data.message}</h2>`;
    }
    weather.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="weather-icon">
            <div class="weather-report">
                <h2>${data.main.temp} <span>&#176;</span>C</h2>
                <h3>${data.weather[0].main}</h3>
           </div>
    `;
}


form.addEventListener("submit",(event)=>{
   event.preventDefault();
   getWeather(search.value);
})






