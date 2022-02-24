locationNameEl = document.querySelector(".loction-name")
tempDegreeEl = document.querySelector(".temp-degree")
tempDescriptionEl = document.querySelector(".temp-description")
tempIconEl = document.querySelector(".icon")


// API = 22dedd9077baa0306792bfff9b36f1b6


window.addEventListener("load", () => {
    let lat
    let long
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(pos => {
            lat = pos.coords.latitude
            long = pos.coords.longitude
            const LOCATION_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=22dedd9077baa0306792bfff9b36f1b6&units=metric` 
            fetch(LOCATION_API)
                .then(response => response.json())
                .then(data => {
                    locationNameEl.innerHTML = `${data.name}<span>${data.sys.country}</span>`
                    tempDegreeEl.innerText = data.main.temp
                    tempDescriptionEl.innerText = data.weather[0].description 
                    tempIconEl.innerHTML = `<img id="wicon" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon"></img>`
                    console.log(data)
                    })
                })
    }else{
        locationNameEl.innerText = "NOT WORKING"
    }
})