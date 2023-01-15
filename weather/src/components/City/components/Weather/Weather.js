import Details from './components/Details/Details';
import styled from 'styled-components';
//一个没有责任的组件？

const Temperature = styled.div`
    font-size:5rem;
`;

const Condition = styled.div`
    /* text-align:center; */
    margin-left: 55px;
    font-size: 1.5rem;
    letter-spacing: 5px;
    margin-top: 0.25rem;
    color: rgba(255,255,255,0.7);

`;

const Weather =({
    temperature,
    condition,
    wind,
    humidity,
})=>{
    return(
        <div>
            <Temperature> {`${temperature} °`}  </Temperature >
            {/* 因为父组件没有责任，而子组件仅仅渲染了一个styled-component所以改写 */}
            <Condition> {condition} </Condition>
            <Details wind={wind} humidity={humidity} />
        </div>
    );
}

export default Weather;
