import { useState, useEffect } from "react";

import styled from "styled-components";
import FutureTemp from "./futureTemp/FutureTemp";
import getForecast from '../apis/getForecast';

const Container = styled.div`
    padding: 36px 48px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;
const Container2 = styled.div`
    display: flex;
`;

const Title = styled.h2`
    margin-left: 20px;
    font-size: 1.5rem;
    margin-bottom: 0;
`;

const TEMPERATURE = [
    {cityId: 0, date:'Mon', weather:{icon:'01n',main:'Rain'}, temp:'9'},
    {cityId: 1, date:'Tue', weather:{icon:'01n',main:'Rain'}, temp:'11'},
    {cityId: 2, date:'Wed', weather:{icon:'01n',main:'Rain'}, temp:'7'},
    {cityId: 3, date:'Thu', weather:{icon:'01n',main:'Rain'}, temp:'8'},
    {cityId: 4, date:'Fri', weather:{icon:'01n',main:'Rain'}, temp:'8'}
]

const Forecast =({
    id
})=>{
    const [forecastData, setForecastData] = useState();
    useEffect(()=>{
        const getForecastData = async() =>{
            const forecastData = await getForecast(id);
            setForecastData(forecastData);
        }
        getForecastData();
    },[id])

    if(!forecastData){
        return null
    }

    const list =  [
        forecastData.data.list[0],
        forecastData.data.list[6],
        forecastData.data.list[14],
        forecastData.data.list[22],
        forecastData.data.list[29],
    ]

    return(
        <Container>
            <Title>Forecast</Title>
            <Container2>
            {list && list.map((item)=>{
                return(
                    <FutureTemp
                        key = {item.cityId}
                        date = {item.dt_txt.substring(6,10)}
                        weather = {{
                            icon:item.weather[0].icon,
                            description:item.weather[0].main,
                        }}
                        temp = {parseInt(item.main.temp)}
                    />
                )
            })}
            </Container2>
        </Container>
    );
}

export default Forecast;
