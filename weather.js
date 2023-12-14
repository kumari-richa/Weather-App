var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik= "82aced1e7cf0e1e9befdfd3cb1044541"
functions convertion(val)
{
    return(val-273).toFixed(3)
}
btn.addEventsListener('click',function()
{
    
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res=>res.json())

    .then(data=>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var windspeed = data['wind']['speed']


        city.innerHTML='weather of<span>${nameval}<span>'
        temp.innerHTML = 'temperature: <span> $ (convertion(temperature)}c</s
        description.innerHTML = 'sky condition: <span<$ {descrip}<span>'
        wind.innerHTML = 'wind speed: <span>$ {windspeed} km\h<span>'
    })

    .catch(err => alert('you entered wrong city name'))
}
)