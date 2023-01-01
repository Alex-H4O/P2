import { useState } from 'react';
import styled from 'styled-components';
import Item from './components/Items/Item';

const Container = styled.div`
margin-top: 32px;
    display:flex;
    justify-content: space-between;
`;

const Divider = styled.div`
    width: 2px;
    background:rgba(255,255,255,0.7) ;
`;

const Details = () =>{

    const [humidity,setHumidity] = useState();
    const [wind,setWind] = useState();

    return(
        <Container>
            <Item title="HUMIDITY">{`${humidity}%`}</Item>
            <Divider />
            <Item title="WIND">{`${wind} K/M`}</Item>
        </Container>
    );
}

export default Details;
