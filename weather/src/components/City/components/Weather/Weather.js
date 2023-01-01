import Details from './components/Details/Details';
import styled from 'styled-components';
import { useState } from 'react';

//一个没有责任的组件？

const Temperature = styled.div`
    font-size:5rem;
`;

const Condition = styled.div`
    text-align:center;
    font-size: 1.5rem;
    letter-spacing: 5px;
    margin-top: 0.25rem;
    color: rgba(255,255,255,0.7);

`;

const getWeather =()=>{
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText)
        }
    }

    xhttp.open("GET");
}

const Weather =()=>{
    const [temperature,setTemperature] = useState()
    const [condition,setCondition] = useState()

    return(
        <div>
            <button onClick={()=> setCondition('Clouds')}>debug</button>
            <Temperature> {`${temperature} °`}  </Temperature >
            {/* 因为父组件没有责任，而子组件仅仅渲染了一个styled-component所以改写 */}
            <Condition>{condition} </Condition>
            <Details/>
        </div>
    );
}

export default Weather;
