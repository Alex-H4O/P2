import styled from "styled-components";
import City from './components/City';
import OtherCities from './components/OtherCities';
import Forecast from './components/Forecast';

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
  height: 600px;
  background-color: white;
  border-radius: 32px;
  box-shadow: 0 0 16px rgb(0 0 0/ 50%);
  overflow: hidden;//解决覆盖
`

const Bottom = styled.div`
  display: flex;
`

const App = ()=> {
  return(
    <Container>
      <Card>
        <City />
        <Bottom>
          <OtherCities />
          <Forecast />
        </Bottom>
      </Card>
    </Container>
  );
}

export default App;
