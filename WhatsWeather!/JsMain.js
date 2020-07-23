var submit = document.querySelector('.submit')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var wind = document.querySelector('.wind');

submit.addEventListener('click' , function () {
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=91ea98a80c9cb1db6dfb953df8ed42c6')
  .then(Response => Response.json())
  .then(data => {

    var cityValue = data['name']
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var windValue = data['wind']['speed']

    city.innerHTML = cityValue
    temp.innerHTML = tempValue
    desc.innerHTML = descValue
    wind.innerHTML = windValue

  })

  
.catch(err => alert("There is no City that have this name , Try again"))
})