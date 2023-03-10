import styled from 'styled-components';
import Item from './components/Items/Item';

const Container = styled.div`
    margin-top: 25px;
    display:flex;
    justify-content: space-between;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

const Divider = styled.div`
    width: 2px;
    background:rgba(255,255,255,0.7) ;
`;

const Details = ({
    humidity,
    wind
}) =>{

    return(
        <Container>
            <Item title="HUMIDITY">{`${humidity}%`}</Item>
            <Divider />
            <Item title="WIND">{`${wind} K/M`}</Item>
        </Container>
    );
}

export default Details;
