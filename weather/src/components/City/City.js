import Weather from './components/Weather';
import Name from './components/Name';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
// import getWeather from '../../utils/getWeather';
import getWeather1 from '../apis/getWeather/getWeather1';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 64px 96px;
    background-image: url(https://i.imgur.com/GhQZhaO.jpg);
    background-size:cover;
    color: white;
    position: relative;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

const Strip = styled.div`
    height: 18px;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 24px;
`

const City =({
    id,
})=>{
    //此处是因为name和weather平级，无法传数据，因此需要状态提升到最小，于是提升到此处，才能保证name拿到数据
    // const [temperature,setTemperature] = useState();
    // const [condition,setCondition] = useState();
    // const [humidity,setHumidity] = useState();
    // const [wind,setWind] = useState();
    // const [name, setName] = useState();

    const [weatherData, setWeatherData] = useState();
    // 使用useEffect拿数据
    // useEffect(()=>{
    //     getWeather(id, setData)//此处等于 getWeather((data) => setData(data)),因为data重名问题，因此改写，setData会直接进入getWeather中的onSuccess（setData）
    //     // getWeather((data)=>{
    //     //     setTemperature(data.main.temp)
    //     //     setCondition(data.weather[0].main)
    //     //     setHumidity(data.main.humidity)
    //     //     setWind(data.wind.speed)
    //     //     setName(data.name)
    //     // })
    // }, [id]);

    useEffect(()=>{
        const getData = async() =>{
            const weatherData = await getWeather1(id);
            setWeatherData(weatherData);
        }
        getData();
    },[id])


    // if(!data){
    //     return null;
    // }
    //写法一
    //因为数据请求需要时间，所以data在最初为undefined，所以页面会报错reading main，此处当data没数据是，返回null
    //can not read properties of undefined(reading main) 常见错误！说明读取main时是undefined

    return(
        <Container>
            {weatherData && (
                <React.Fragment>
                    {/* 占位符 ,可以当一个root,但不渲染任何东西*/}
                    <Weather
                        // temperature={temperature}
                        // condition ={condition}
                        // humidity= {humidity}
                        // wind= {wind}
                        temperature={weatherData.data.main.temp}
                        condition ={weatherData.data.weather[0].main}
                        humidity= {weatherData.data.main.humidity}
                        wind= {weatherData.data.wind.speed}
                    />
                    <Name name = {weatherData.data.name}/>
                </React.Fragment>)}
                {/* 写法二 */}
            <Strip/>
        </Container>
    );
}

export default City;
