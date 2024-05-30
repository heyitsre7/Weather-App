let city = document.getElementById("city");
let button = document.getElementById("btn");

let key = `e9d241d9d24856d1d273b5b26c515f35`;

button.addEventListener("click" ,()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&units=metric`)
    .then((Response)=> {
        return Response.json();
    })
    .then((data)=>{
        document.getElementById("in-city").innerHTML =  data.name;
        document.getElementById("sunrise").innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();   
        document.getElementById("sunset").innerHTML = new Date (data.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById("temp").innerHTML = data.main.temp;
        document.getElementById("pressure").innerHTML = data.main.pressure;
        document.getElementById("wind-speed").innerHTML = data.wind.speed;
        document.getElementById("humid").innerHTML = data.main.humidity;
        document.getElementById("status").innerHTML = data.weather[0].description;

        console.log(data);
    })
})