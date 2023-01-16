import styled from "styled-components";
import FutureTemp from "./futureTemp/FutureTemp";

const Container = styled.div`
    padding: 36px 48px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

const Title = styled.h2`
    margin-left: 20px;
    font-size: 1.5rem;
`;

const Forecast =()=>{
    return(
        <Container>
            <Title>Forecast</Title>
            <FutureTemp/>
        </Container>
    );
}

export default Forecast;
