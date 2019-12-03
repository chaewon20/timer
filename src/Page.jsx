import React from 'react';
import styled from 'styled-components';
import Timer from './components/Timer';

const Title = styled.h1`
    color: white;
    text-align: center;
    font-size: 4em;

`
const Field = styled.div`
    display: flex;
    justify-content: center;
`

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    

    render(){
        return(
            <>
                <Title>Timer</Title>
                <Field>
                    <Timer />
                    <Timer />
                    <Timer />
                </Field>
            </>
        )
    }
}

export default Page;