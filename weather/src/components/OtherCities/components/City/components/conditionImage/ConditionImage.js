
import styled from "styled-components";

const Image = styled.img`
    width:50px;
    height: 50px;
`;
const ConditionImage = ({
    weather
}) =>{
    return(
        <Image
            src = {`https://openweathermap.org/img/wn/${weather.icon}.png`}
            alt = {weather.main}
        />
        //两个责任,自成一体不需要像name那样删掉
    );
}

export default ConditionImage;
