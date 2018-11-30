document.addEventListener("DOMContentLoaded", function (){
    
    let input = document.querySelector('#find_city');
    
    let inputValue = "Valore dell 'input"

    const api_key = "6656def07bf5f53f35ca46456ea262d7"

    let button = document.querySelector('#myBtn')
    let container = document.querySelector('.container')
    let city = document.querySelector('.city')
    let conditions = document.querySelector('.conditions')
    let temperatura = document.querySelector('.temperatura')

    input.addEventListener('change', (event) => {
    const myVar = event.target.value
    console.log(event)
    console.log(myVar)

    button.addEventListener("click", (event) =>{
        console.log('ok')
            fetch("http://api.openweathermap.org/data/2.5/weather?q="+ myVar + "&units=matric&appid="+ api_key)
        
          .then(response => {
              
              if (response.ok && response.status===200){
                
                console.log(response)
                
                return response.json()
                
                } else {
                    console.log('Error:' + response.status)
                }
               
          }).then(res => {
         console.log(res)
          let cityName = document.createTextNode(res.name)
          city.appendChild(cityName)
          

          let condName = document.createTextNode(res.weather[0].main)
          conditions.appendChild(condName)

          let tempName = document.createTextNode(res.main.temp)
          temperatura.appendChild(tempName)
          
          if (res.weather[0].main === "Clouds") {
            var image = document.createElement('img') 
            image.src = 'images/rainbow.gif'
            container.appendChild(image)
          }else if(res.weather[0].main === "Sun") {
            var image = document.createElement('img') 
            image.src = 'images/sole.gif'
            container.appendChild(image)
        }else if(res.weather[0].main === "Rain") {
            var image = document.createElement('img') 
            image.src = 'images/nuvola.gif'
            container.appendChild(image)
        }
        
              })
        
        })
    })
})

