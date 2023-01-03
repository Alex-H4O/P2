import styled from 'styled-components';
import City from './components/City/City';

const Container = styled.div`
    padding: 36px 48px;
`;

const Title = styled.h2`
    font-size: 1.5rem;
`;

const CITIES = [
    {id:0, name:'Sydney', temperature:'17', weather:{icon:'10n',main:'Rain'}},
    {id:1, name:'Brisbane', temperature:'20', weather:{icon:'10n',main:'Rain'}},
    {id:2, name:'Perth', temperature:'21', weather:{icon:'01d',main:'Clear'}},
]

const OtherCities =()=> {
    return(
        <Container>
            <Title>Other Cities</Title>
            {CITIES.map((city) => (
                <City
                    key={city.id}
                    name = {city.name}
                    temperature={city.temperature}
                    weather={city.weather}
                />
            ))}
        </Container>
    );
}

export default OtherCities;
