import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  
  const [data,setdata] = useState({});
  const [location,setlocation] = useState('');
  const apiurl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=def0829e9b68e54b336f9b9041b3bd57`
  
  const searchlocation = (event)=>{
    if(event.key === 'Enter'){
      axios.get(apiurl).then((responce)=>{
        setdata(responce.data)
        console.log(responce.data)
      })
    }
  }
  return (
    <div className='app'>
      <div className='search'>
      <input type='text' placeholder='Enter Location' value={location} 
      onChange={event => setlocation(event.target.value)} onKeyPress={searchlocation}/>
      </div>
      <div className='contianer'>
        <div className='name'>
        <p>{data.name}</p>
        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> :null}
        <div className='update'>{data.main ? <p>{data.weather[0].main}</p> :null} </div>
        </div>
        <div>
      <div className='next'> 
        <div className='nextupdate'> 
        {data.main ? <p>Feels Like ({data.main.feels_like.toFixed()})°C</p> :null}
          
          {data.wind ? <p>Wind ({data.wind.speed})km/h</p> :null}
         {data.main ? <p>Humadity({data.main.humidity})</p> :null}
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default App;
