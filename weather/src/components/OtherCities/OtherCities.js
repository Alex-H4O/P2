import styled from 'styled-components';
import City from './components/City/City';
import { useState } from 'react';
const Container = styled.div`
    padding: 36px 48px;
`;

const Title = styled.h2`
    font-size: 1.5rem;
`;

const CITIES = [
    {id:2158177, name:'Melbourne', temperature:'14', weather:{icon:'01n',main:'Rain'}},
    {id:2147714, name:'Sydney', temperature:'17', weather:{icon:'10n',main:'Rain'}},
    {id:2174003, name:'Brisbane', temperature:'20', weather:{icon:'10n',main:'Rain'}},
    {id:2063523, name:'Perth', temperature:'21', weather:{icon:'01d',main:'Clear'}},
]

const OtherCities =({
    currentCityId,
    onCityClick,
})=> {
    // const [currentCity, setCurrentCity] = useState(2158177);
    return(
        <Container>
            <Title>Other Cities</Title>
            {CITIES.map((city) => {
                if(currentCityId === city.id){
                    return null;
                }
                return(
                    <City
                        key={city.id}
                        name = {city.name}
                        temperature={city.temperature}
                        weather={city.weather}
                        onClick={()=>onCityClick(city.id)}
                        // onClick={()=>{
                        //     // setCurrentCity(city.id)
                        //     // onCityClick(city.id)

                        // }}
                    />
                )
                })}
        </Container>
    );
}

export default OtherCities;
