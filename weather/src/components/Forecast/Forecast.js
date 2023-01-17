import styled from "styled-components";
import FutureTemp from "./futureTemp/FutureTemp";

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

const Forecast =()=>{
    return(
        <Container>
            <Title>Forecast</Title>
            <Container2>
            {TEMPERATURE.map((item)=>{
                return(
                    <FutureTemp
                        key = {item.cityId}
                        date = {item.date}
                        weather = {item.weather}
                        temp = {item.temp}
                    />
                )
            })}
            </Container2>
        </Container>
    );
}

export default Forecast;
