import styled from "styled-components";
import React from "react";
import ConditionImage from "../../OtherCities/components/City/components/conditionImage/ConditionImage";

const Container = styled.div`
    margin-top:26px;
    display: flex;
    padding: 0;
    border: 0;
    font-size:1.2rem;
`;

const Date = styled.div`
    margin-bottom: 16px;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 4rem;
    padding: 5px 8px;
`;

const Temperature = styled.div`
    margin-top: 16px;
`;

const TEMPERATURE = [
    {id: 2158177, date:'Mon', weather:{icon:'01n',main:'Rain'}, temp:'9'},
    {id: 2158177, date:'Tue', weather:{icon:'01n',main:'Rain'}, temp:'11'},
    {id: 2158177, date:'Wed', weather:{icon:'01n',main:'Rain'}, temp:'7'},
    {id: 2158177, date:'Thu', weather:{icon:'01n',main:'Rain'}, temp:'8'},
    {id: 2158177, date:'Fri', weather:{icon:'01n',main:'Rain'}, temp:'8'}
]

const FutureTemp =()=>{
    return(
        <Container>
                {TEMPERATURE.map((item)=>{
                    return(
                        <CardContainer>
                            <Date>{item.date}</Date>
                            <ConditionImage weather={item.weather}/>
                            <Temperature>{`${item.temp}°`}</Temperature>
                        </CardContainer>
                    )
                })}
        </Container>
    );
}

export default FutureTemp;