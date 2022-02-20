var apikey = '8c4d35765092f0f719cacf8eae05ac99';
var apilocation ="Bucharest,ro";
var apiunits=document.querySelector('input[name="units"]:checked').value;
var apiurl= `https://api.openweathermap.org/data/2.5/weather?q=${apilocation}&appid=${apikey}`
var apiurlM=`https://api.openweathermap.org/data/2.5/weather?q=${apilocation}&appid=${apikey}&units=metric`
var apiurlI=`https://api.openweathermap.org/data/2.5/weather?q=${apilocation}&appid=${apikey}&units=imperial`

var weatherDescription = document.querySelector('.Weather-description');
var weatherLocation = document.querySelector(".Weather-location")
var weatherNumber =document.querySelector('.weather-number')
var weatherIcon = document.querySelector('.Weather-image')
var WeatherCelsius = document.querySelector('.Weather-celsius')

fetch(apiurl)
 .then(function(response){
     response.json().then(function(data){
         console.log(data)
console.log(data.weather[0].icon)
console.log(data.name)
console.log(data.main.temp)
console.log(data.weather[0].description)


weatherDescription.innerHTML = data.weather[0].description;
weatherLocation.innerHTML= data.name
weatherNumber.innerHTML = Math.floor(data.main.temp)
weatherIcon.src= `./icons/${data.weather[0].icon}.png`
WeatherTemperature =Math.floor(data.main.temp)
 
     })
 })
 .catch(function(error) {
     console.log("Error occured:",error);
 })
 fetch(apiurlM)
 .then(function(response){
     response.json().then(function(data){
         console.log(data)
console.log(data.weather[0].icon)
console.log(data.name)
console.log(data.main.temp)
console.log(data.weather[0].description)


weatherDescription.innerHTML = data.weather[0].description;
weatherLocation.innerHTML= data.name
weatherNumber.innerHTML = Math.floor(data.main.temp)
weatherIcon.src= `./icons/${data.weather[0].icon}.png`
WeatherTemperatureMetric =Math.floor(data.main.temp)
 
     })
 })
 .catch(function(error) {
     console.log("Error occured:",error);
 })
 fetch(apiurlI)
 .then(function(response){
     response.json().then(function(data){
         console.log(data)
console.log(data.weather[0].icon)
console.log(data.name)
console.log(data.main.temp)
console.log(data.weather[0].description)


weatherDescription.innerHTML = data.weather[0].description;
weatherLocation.innerHTML= data.name
weatherNumber.innerHTML = Math.floor(data.main.temp)
weatherIcon.src= `./icons/${data.weather[0].icon}.png`
WeatherTemperatureimperial =Math.floor(data.main.temp)
 
     })
 })
 .catch(function(error) {
     console.log("Error occured:",error);
 })
 var radiobuttons =document.querySelectorAll('input[name="units"]');
 for (var i = 0; i < radiobuttons.length; i++){
radiobuttons[i].addEventListener('click',function(event){
    apiunits = event.target.value;
    //WeatherTemperature -273 
    if(apiunits == "metric"){
        WeatherCelsius.innerHTML = "C"
        weatherNumber.innerHTML =WeatherTemperatureMetric
    }
    //Math.floor(WeatherTemperature * 9/5 - 459.67)
    if(apiunits == 'imperial'){
        WeatherCelsius.innerHTML = "F"
        weatherNumber.innerHTML =WeatherTemperatureimperial 
    }
    if(apiunits == 'standard'){
        WeatherCelsius.innerHTML = ""
        weatherNumber.innerHTML= WeatherTemperature
    }
})
}

var searchInput  = document.querySelector("input[type='search']")
searchInput.addEventListener('search',function(event){
    apilocation = event.target.value;
    
    apiurl= `https://api.openweathermap.org/data/2.5/weather?q=${apilocation}&appid=${apikey}`
    apiurlM=`https://api.openweathermap.org/data/2.5/weather?q=${apilocation}&units=metric&appid=${apikey}`
    apiurlI=`https://api.openweathermap.org/data/2.5/weather?q=${apilocation}&units=imperial&appid=${apikey}`
    fetch(apiurl)
    .then(function(response){
        response.json().then(function(data){
   console.log(data.weather[0].icon)
   console.log(data.name)
   console.log(data.main.temp)
   console.log(data.weather[0].description)
   
   
   weatherDescription.innerHTML = data.weather[0].description;
   weatherLocation.innerHTML= data.name
   weatherNumber.innerHTML = Math.floor(data.main.temp)
   weatherIcon.src= `./icons/${data.weather[0].icon}.png`
   WeatherTemperature =Math.floor(data.main.temp)
        })
    })
    .catch(function(error) {
        console.log("Error occured:",error);
    }) 
    })
    fetch(apiurlM)
    .then(function(response){
        response.json().then(function(data){
            console.log(data)
   console.log(data.weather[0].icon)
   console.log(data.name)
   console.log(data.main.temp)
   console.log(data.weather[0].description)
   
   
   weatherDescription.innerHTML = data.weather[0].description;
   weatherLocation.innerHTML= data.name
   weatherNumber.innerHTML = Math.floor(data.main.temp)
   weatherIcon.src= `./icons/${data.weather[0].icon}.png`
   WeatherTemperatureMetric =Math.floor(data.main.temp)
    
        })
    })
    .catch(function(error) {
        console.log("Error occured:",error);
    })
    fetch(apiurlI)
    .then(function(response){
        response.json().then(function(data){
            console.log(data)
   console.log(data.weather[0].icon)
   console.log(data.name)
   console.log(data.main.temp)
   console.log(data.weather[0].description)
   
   
   weatherDescription.innerHTML = data.weather[0].description;
   weatherLocation.innerHTML= data.name
   weatherNumber.innerHTML = Math.floor(data.main.temp)
   weatherIcon.src= `./icons/${data.weather[0].icon}.png`
   WeatherTemperatureimperial =Math.floor(data.main.temp)
    
        })
    })
    .catch(function(error) {
        console.log("Error occured:",error);
    })
