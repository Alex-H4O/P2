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
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
    onClick,
})=>{
    return(
        //初始写法
        //const [clicked, setClicked] = useState(false)
        //if(clicked) {
        //     return null;
        // } 被提到otherCities中，因为在city中无法获取其他city的信息。因为我们点击之后需要消失并显示其他城市
        <Container onClick={(event)=>{
            event.preventDefault();
            onClick(true);
            // 此处控制的是otherCity中的点击消失
        }}>
            <Name>{name}</Name>
            <Temperature>{`${temperature} °`} </Temperature>
            <ConditionImage weather={weather}/>
        </Container>
    );
}

export default City;
