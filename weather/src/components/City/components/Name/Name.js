import styled from 'styled-components';

const Container = styled.div`
    font-size: 2rem;
    font-weight: 500;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;
const HorizontalRule = styled.div`
    width: 50%;
    margin-top: 8px;
    background-color: white;
    height: 2px;
`;

const Name = ({name}) =>{
    return(
        <Container>
            <div>{name}</div>
            <HorizontalRule />
        </Container>
    );
}

export default Name;
