let container2 = document.querySelector('.container2');
var search = document.getElementById('search')
let container3 = document.querySelector('.container3');
let hii = document.querySelector('#hii')
  let img11 = document.querySelector('#img11')




 



function timezone(){

search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      var search = document.getElementById('search').value
      
    
fetch(`https://api.weatherapi.com/v1/timezone.json?key=bd0715d13e1d4b1c830173812220401&q=${search}`)
    .then(response => response.json())
    .then(user => {

       

        
        const first1 = user.location.country;
        const second = user.location.tz_id;
        

        const third = `Today -  ${user.location.localtime}`; 


         container3.textContent = first1
        container2.textContent = second;
        container2.style.color = "#a8dadc"
        container2.style.fontSize = "1.4em"
        container2.style.textAlign = "center"
        container2.style.margin = "20px"

        container3.style.color = "#8ecae6"
        container3.style.fontSize = "1.4em"
        container3.style.textAlign = "center"
        container3.style.margin = "20px"
        container3.textContent= third;

        
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


            let day2 = document.querySelector('#img11')
            const day = data.current.wind_mph + " %";
            day2.style.color = "white"
            day2.style.textAlign = "center"
            day2.style.marginTop="30px";
            day2.style.fontSize = "2em";
            day2.textContent = day

            let day22 = document.querySelector('#img2')
            const day3 =  data.current.humidity + " %";
            day22.style.color = "white"
            day22.style.textAlign = "center"
            day22.style.marginTop="30px";
            day22.style.fontSize = "2em";
            day22.textContent = day3

            let day222 = document.querySelector('#img3')
            const day1 = data.current.cloud + " Cloud";
            day222.style.color = "white"
            day222.style.textAlign = "center"
            day222.style.marginTop="30px";
            day222.style.fontSize = "2em";
            day222.textContent  = day1

            let day2222 = document.querySelector('#img4')
            const day5 = data.current.vis_miles + " miles";
            day2222.style.color = "white"
            day2222.style.textAlign = "center"
            day2222.style.marginTop="30px";
            day2222.style.fontSize = "2em";
            day2222.textContent  = day5

 
            
           
            
        })

        .catch(err => {
  
      console.error(err.message);
    });
}
})

}

tomorow()