import logo from './logo.svg';
import axios from "axios";
import {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {

const apiKey="760e46a01d7c5571c828062ccefa9b53"
const [inputcityname,setcity]=useState("")
const [data,setData]=useState({})
const getWeather= (cityName) =>{
  if(!cityName)
  return
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q="+cityName + "&appid="+apiKey

axios.get(apiUrl).then((res)=>{
  console.log("response",res.data)
  setData(res.data);

}).catch((err)=>{
  console.log("err",err)
})
}
const handleinputchange= (e)=>{
setcity(e.target.value)
}
const handleSearch=()=>{
 getWeather(inputcityname )
}
useEffect(()=>{
getWeather("delhi")
},[])

  return (
   <div className="col-md-12">
    <div className="weatherBg">
      <h1 className="heading">Weather App</h1>
      <div className= "d-grid  gap-3 col-4 mt-4">
      <input type ="text" className="from-control" onChange={handleinputchange} />
      <button className ="btn btn-primary" type="button"
      onClick={handleSearch}
      > Search</button>
      </div>
    </div>
       <div className="col-md-12 text-center mt-5">
        <div className="shadow-box-example z-depth-1-half flex-cente\">
         <img className="icon"
         src="https://images.all-free-download.com/images/graphicwebp/nature_background_11_211864.webp"/>

         <h5 className="city">
          {data?.name}
         </h5>
         <h6 className="temp"> {((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
        </div>
      </div>
   </div>
  );
}

export default App;
