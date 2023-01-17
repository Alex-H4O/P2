import styled from "styled-components";
import ConditionImage from "../../OtherCities/components/City/components/conditionImage/ConditionImage";

const Container = styled.div`
    margin-top:26px;
    display: flex;
    padding: 0;
    border: 0;
    font-size:1.2rem;
`;

const Date = styled.div`
    margin-left: 5px;
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
    margin-left: 3px;
    margin-top: 16px;
`;


const FutureTemp =({
    date,
    weather,
    temp,
})=>{
    return(
        <Container>
            <CardContainer>
                <Date>{date}</Date>
                <ConditionImage weather={weather}/>
                <Temperature>{`${temp}°`}</Temperature>
            </CardContainer>
        </Container>
    );
}

export default FutureTemp;
