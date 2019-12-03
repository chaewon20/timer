import React from 'react';
import styled from 'styled-components';

const FlowerPot = styled.img``
const LeftTime = styled.div``

const Time = props => {

    return(
        <>
            <FlowerPot/>
            <LeftTime>{Math.floor(props.time/60)}분 {props.time%60}초</LeftTime>
        </>
    )
}

export default Time;