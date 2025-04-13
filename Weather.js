const select=document.querySelector('button');

select.addEventListener('click',(()=>{

   const location = document.getElementById('city').value;

   function update_data(data){

    const empty = document.getElementById('weather_result');
    empty.style.backgroundColor="white";
    empty.innerHTML=`Tempreture : ${data.current.temp_c}`;
   }

   const api = fetch(`http://api.weatherapi.com/v1/current.json?key=49ce268583c8407389d92927250604&q=${location}&aqi=yes`)

   api
   .then(response=>response.json())
   .then(data=>update_data(data));

}))