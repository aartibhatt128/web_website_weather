var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp1 = document.querySelector('.temp1');
var temp2 = document.querySelector('.temp2');
var temp3 = document.querySelector('.temp3');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.button');
var humid1=document.querySelector('.humid1');
var humid2=document.querySelector('.humid2');
var humid3=document.querySelector('.humid3');
var min1=document.querySelector('.min1');
var min2=document.querySelector('.min2');
var min3=document.querySelector('.min3');

var max1=document.querySelector('.max1');
var max2=document.querySelector('.max2');
var max3=document.querySelector('.max3');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&units=metric&appid=a70eb54edbc725a58ac387d231ebab19')
.then(response => response.json())
.then(data => {

	var namevalue=data['city']['name'];
  var temp1Value =data['list']['0']['main']['temp'];
  var temp2Value= data['list']['8']['main']['temp'];
  var temp3Value= data['list']['16']['main']['temp'];
  
  var min1value=data['list']['0']['main']['temp_min'];
  var min2value=data['list']['8']['main']['temp_min'];
  var min3value=data['list']['16']['main']['temp_min'];

  var max1value=data['list']['0']['main']['temp_max'];
  var max2value=data['list']['8']['main']['temp_max'];
  var max3value=data['list']['16']['main']['temp_max'];
   
   var humid1value=data['list']['0']['main']['humidity'];
   var humid2value=data['list']['8']['main']['humidity'];
   var humid3value=data['list']['16']['main']['humidity'];
  


  	main.innerHTML=namevalue;
    temp1.innerHTML = "TODAY -<br>Temperature- "+temp1Value+" degree celsius";
    temp2.innerHTML = "TOMORROW-<br>Temperature- "+temp2Value+" degree celsius";
    temp3.innerHTML = "DAY AFTER TOMORROW-<br>Temperature- "+temp3Value+" degree celsius";
  
    min1.innerHTML=  "Min-temp  "+min1value+" degree celsius";
    min2.innerHTML=  "Min-temp  "+min2value+" degree celsius";
    min3.innerHTML=  "Min-temp  "+min3value+" degree celsius";
    
    max1.innerHTML=  "Max-temp  "+max1value+" degree celsius";
    max2.innerHTML=  "Max-temp  "+max2value+" degree celsius";
    max3.innerHTML=  "Max-temp  "+max3value+" degree celsius";
    
    humid1.innerHTML="Humidity  "+humid1value+"%";
    humid2.innerHTML="Humidity  "+humid2value+"%";
    humid3.innerHTML="Humidity  "+humid3value+"%";
  
  input.value ="";



})

.catch(err => alert("Wrong city name!"));
})

