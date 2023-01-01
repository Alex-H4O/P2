import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    opacity: 0.7;//透明度\
    font-size: 1.25px;
`;

const Value = styled.div`
    margin-top: 14px;
`;

const Item =({
    title,
    children,
})=>{
    return (
        <Container>
            <div>{title}</div>
            <Value>{children}</Value>
        </Container>
    );
}

export default Item;
