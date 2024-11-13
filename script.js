const apiKey="d7e79c19a89f4700201ec1b2de041890";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");
        const WeatherIcon=document.querySelector(".weather-icon");
        async function checkWeather(city){
            const response=await fetch(apiUrl +city+ `&appid=${apiKey}`);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weathe`r").style.display="none";
            }else{
            var data=await response.json();
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
            if(data.weather[0].main=="Clouds"){
                WeatherIcon.src="images/clouds.png";
            }
            else if(data.weather[0].main=="Clear"){
                WeatherIcon.src="images/clear.png";
            }
            else if(data.weather[0].main=="Rain"){
                WeatherIcon.src="images/rain.png";
            }
            else if(data.weather[0].main=="Drizzle"){
                WeatherIcon.src="images/drizzle.png";
            }
            else {
                WeatherIcon.src="images/mist.png";
            }
            document.querySelector(".error").style.display="none";
            document.querySelector(".weather").style.display="block";
            
            }
            
        }
        
        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        })
        checkWeather();