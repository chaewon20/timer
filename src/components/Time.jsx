import React from 'react';
import styled from 'styled-components';
import pot4 from '../flowerPot/4.png';

const FlowerPot = styled.img`
    width: 100px;
    margin: 20px;
`
const LeftTime = styled.div`
    margin: 0 60px;
`
const Div = styled.div`
    width: 150px;
    height: 125px;
    background-color: white;
    border-radius: 10px;
    margin: 25px 25px 10px 25px;
`

class Time extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            t : 0,
            s : "",
        }
    }
    componentDidMount(){
        this.setState({t: this.props.time})
        this.tick();
    }
    tick() {
        
        const ID = setInterval(() => {
            this.setState({t: this.state.t - 1});
            console.log(this.state.t);
            if(this.state.t == 0){
                clearInterval(ID);
            }

        }, 1000)
    }
    render(){
    return(
        <div onLoad={this.tick}>
            <Div>
                <FlowerPot src={this.state.s}></FlowerPot>
            </Div>
            <LeftTime>{Math.floor(this.state.t/60)}분 {this.state.t%60}초</LeftTime>
        </div>
    )
    }
}

export default Time;