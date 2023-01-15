import styled from 'styled-components';
import City from './components/City/City';
import { useEffect, useState } from 'react';
import getWeathers from '../apis/getWeathers/getWeathers';
const Container = styled.div`
    padding: 36px 48px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

const Title = styled.h2`
    font-size: 1.5rem;
`;

// const CITIES = [
//     {id:2158177, name:'Melbourne', temperature:'14', weather:{icon:'01n',main:'Rain'}},
//     {id:2147714, name:'Sydney', temperature:'17', weather:{icon:'10n',main:'Rain'}},
//     {id:2174003, name:'Brisbane', temperature:'20', weather:{icon:'10n',main:'Rain'}},
//     {id:2063523, name:'Perth', temperature:'21', weather:{icon:'01d',main:'Clear'}},
// ]
const CITIES = [
    {id:2158177, name:'Melbourne'},
    {id:2147714, name:'Sydney'},
    {id:2174003, name:'Brisbane'},
    {id:2063523, name:'Perth'},
]

const OtherCities =({
    currentCityId,
    onCityClick,
})=> {
    const [cityData, setCityData] = useState();
    // const [cityPic, setCityPic] = useState();
    useEffect(()=> {
        const getOtherCitiesData = async() =>{
            const ids = CITIES.map((c)=> c.id);
            const cityData = await getWeathers(ids);
            // console.log(cityData);
            setCityData(cityData);
        }

        getOtherCitiesData();
    },[])

    // const [currentCity, setCurrentCity] = useState(2158177); onclick被提升后因为名称问题，所以更改为currentCity，
    //与City中的const [cityId, setCityId] = useState(2158177);重复
    return(
        <Container>
            <Title>Other Cities</Title>
            {console.log(cityData)}
            {cityData && cityData.data.list.map((city) => {
                if(currentCityId === city.id){
                    return null;
                }//判断，当id相同时消失并转换，初始值为Mel,所以墨尔本消失，显示其他的
                return(
                    <City
                        key={city.id}
                        name = {city.name}
                        temperature={parseInt(city.main.temp)}
                        weather={{
                            icon:city.weather[0].icon,
                            descripton:city.weather[0].main,
                        }}
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
