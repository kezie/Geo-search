const cityForm = document.getElementById("form-2");
const cityInput = document.getElementById("searchInput");


let errorLog =document.getElementById("error");


const reportSection1 = document.getElementById('temp');
const reportSection2 = document.getElementById('humidity');
const reportSection3 = document.getElementById('wind');
const reportSection4 = document.getElementById('pressure');
const reportSection5 = document.getElementById('holder');
const reportSection6 = document.getElementById('long');
const reportSection7 = document.getElementById('lati');

  //Run frash API call on button click
              cityForm.addEventListener('submit', ($event) => {
                $event.preventDefault();
                const chosenCity = cityInput.value;
                document.getElementById("searchInput").textContent=chosenCity;
                apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity  +'&APPID=46bd26536df39b7756504796324157f0');
                apiRequest.send();
              });
              // Prepare openweathermap.org request
              let apiRequest = new XMLHttpRequest();
              apiRequest.onreadystatechange = () => {
                if (apiRequest.readyState === 4) {
                  if (apiRequest.status === 404 ){
                    cityInput.style.border='thin solid red';
                    return  errorLog.textContent = 'City not found';
                      }
                const response = JSON.parse(apiRequest.response); 
                
                    
                reportSection1.textContent = response.main.temp;
                reportSection2.textContent = response.main.humidity;
                reportSection3.textContent = response.wind.speed;
                reportSection4.textContent = response.main.pressure;
                reportSection5.textContent = response.main.temp;
                reportSection6.textContent = response.coord.lon;
                reportSection7.textContent = response.coord.lat;
                    
                }
  
  
                document.getElementById('titleText').textContent = cityInput.value;        
              
                };

                function toggle () {
                                        
                  if (cont[1]) {
                      reportSection1.textContent = ((reportSection5.textContent -273.15)*1.8)+32;
                      
                                            
                  } else if(cont[2]) {
                      reportSection1.textContent = reportSection5.textContent -273.15;
                      
                  }else {
                    reportSection1.textContent = reportSection5;
                  }
                }
              
                let cont = document.getElementsByTagName("option") ;
      
                
  
    
  

