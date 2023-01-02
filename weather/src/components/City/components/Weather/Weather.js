import Details from './components/Details/Details';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

//一个没有责任的组件？

const Temperature = styled.div`
    font-size:5rem;
`;

const Condition = styled.div`
    /* text-align:center; */
    margin-left: 50px;
    font-size: 1.5rem;
    letter-spacing: 5px;
    margin-top: 0.25rem;
    color: rgba(255,255,255,0.7);

`;

const getWeather =(onSuccess)=>{
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            const data = JSON.parse(this.responseText);
            onSuccess(data);
            console.log(data);
            console.log(data.weather);
        }
    }

    const cityId = 2158177;
    const appId = 'e723d8dd29fffc587c539e9a37fd241d';
    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${appId}`, true);
    xhttp.send();
}



const Weather =()=>{
    const [temperature,setTemperature] = useState();
    const [condition,setCondition] = useState();

    useEffect(()=>{
        getWeather((data)=>{
            setTemperature(data.main.temp)
            setCondition(data.weather[0].main)
        })
    },[]);

    return(
        <div>
            <Temperature> {`${temperature} °`}  </Temperature >
            {/* 因为父组件没有责任，而子组件仅仅渲染了一个styled-component所以改写 */}
            <Condition> {condition} </Condition>
            <Details/>
        </div>
    );
}

export default Weather;
