let container2 = document.querySelector('.container2');
var search = document.getElementById('search')
let container3 = document.querySelector('.container3');
let hii = document.getElementById('hii')
  let img11 = document.querySelector('#img11')




 



function timezone(){

search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      var search = document.getElementById('search').value
      
    
fetch(`https://api.weatherapi.com/v1/timezone.json?key=bd0715d13e1d4b1c830173812220401&q=${search}`)
    .then(response => response.json())
    .then(user => {

       

        const first = document.createElement('h2');
        first.textContent = user.location.country;
        const second = document.createElement('h2')
        second.textContent = user.location.tz_id;

        const third = document.createElement('h4')
        third.innerText =`Today -  ${user.location.localtime}`; 


         
        container2.appendChild(first);
        container2.appendChild(second);
        container2.appendChild(third);
    })

   .catch(error => {
       alert('undefined')
      console.error(error.message);
    });    
}
});

}
 

timezone()


function current() {
    search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var search = document.getElementById('search').value

        fetch(`https://api.weatherapi.com/v1/current.json?key=bd0715d13e1d4b1c830173812220401&q=${search}`)
        .then(response => response.json())
        .then(data => {

            const first11 = document.createElement('img')
            first11.src = data.current.condition.icon;


            const first1 = document.createElement('h1')
            first1.innerHTML = `${data.current.temp_c} °C`

            const second2 = document.createElement('h2')
            second2.textContent = data.current.condition.text;

            container3.appendChild(first1);

            container3.appendChild(first11)
            
            container3.appendChild(second2)

            
        })

        .catch(err => {
  
      console.error(err.message);
    });
}
})


}

current()




function tomorow() {
    search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var search = document.getElementById('search').value

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=bd0715d13e1d4b1c830173812220401&q=${search}&days=1`)
        .then(response => response.json())
        .then(data => {
           
            
            // const first11 = document.createElement('img')

            // first11.src = data.forecast.forecastday.day.condition.icon;
            // img11.appendChild(first11)


            let day2 = document.createElement('p')
            day2.textContent = data.current.wind_mph + " %";
            day2.style.color = "white"
            day2.style.textAlign = "center"
            day2.style.marginTop="30px";
            day2.style.fontSize = "2em";
            img11.appendChild(day2)

            let day3 = document.createElement('p')
            day3.textContent = data.current.humidity + " %";
            day3.style.color = "white"
            day3.style.textAlign = "center"
            day3.style.marginTop="30px";
            day3.style.fontSize = "2em";
            img2.appendChild(day3)


            let day1 = document.createElement('p')
            day1.textContent = data.current.cloud + " Cloud";
            day1.style.color = "white"
            day1.style.textAlign = "center"
            day1.style.marginTop="30px";
            day1.style.fontSize = "2em";
            img4.appendChild(day1)


            let day4 = document.createElement('p')
            day4.textContent = data.current.vis_miles + " miles";
            day4.style.color = "white"
            day4.style.textAlign = "center"
            day4.style.marginTop="30px";
            day4.style.fontSize = "2em";
            img3.appendChild(day4)

 
            
           
            
        })

        .catch(err => {
  
      console.error(err.message);
    });
}
})

}

tomorow()