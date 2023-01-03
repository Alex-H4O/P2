import styled from "styled-components";
import ConditionImage from "./components/conditionImage/ConditionImage";

const Container = styled.button`
    display:  flex;
    background: transparent;
    border: 0;
    font-size: 1.25rem;
    padding:0 ;
    text-align: left;
    cursor: pointer;
    align-items: center;
`;

const Name = styled.div`
    width:120px;
`;

const Temperature = styled.div`
    width: 3rem;
    text-align: right;
    margin-right:0.5rem ;
`;

const City = ({
    name,
    temperature,
    weather,
})=>{
    return(
        <Container>
            <Name>{name}</Name>
            <Temperature>{`${temperature} °`} </Temperature>
            <ConditionImage weather={weather}/>
        </Container>
    );
}

export default City;
