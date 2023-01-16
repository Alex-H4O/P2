import styled from "styled-components";
import City from './components/City';
import OtherCities from './components/OtherCities';
import Forecast from './components/Forecast';
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(https://wallpaperaccess.com/full/2629319.png);
  background-size: cover;
`
const Card = styled.div`
  width: 800px;
  /* height: 600px; */
  background-color: white;
  border-radius: 32px;
  box-shadow: 0 0 16px rgb(0 0 0/ 50%);
  overflow: hidden;//解决覆盖
`

const Bottom = styled.div`
  display: flex;
`

const App = ()=> {
  const [cityId, setCityId] = useState(2158177);//此处是从City文件夹下的City中提升上来的，
  //因为othercity需要City中的setCityId，然而平级无法传递数据，所以提升

  return(
    <Container>
      <Card>
        <City id = {cityId} />
        <Bottom>
          <OtherCities currentCityId={cityId} onCityClick={(id) =>setCityId(id)} />
          <Forecast id = {cityId}/>
        </Bottom>
      </Card>
    </Container>
  );
}

export default App;
