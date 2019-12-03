import React from 'react';
import styled from 'styled-components';
import Time from './Time';
import pot from '../flowerPot/화분.png';


const Wrapper = styled.div`
    width: 200px;
    height: 200px;
    background-color: tomato;
    border-radius: 10px;
    margin: 50px;
    color: white;
    
`
const FlowerPot = styled.img`
    width: 100px;
    margin: 20px;
`
const SetTime = styled.input`
    width : 20%;
    border: none;
    margin: 5px;
    border-radius: 3px;
`
const Start = styled.button`
    border: none;
    background-color: white;
    color: tomato;
    margin: 5px;
    border-radius: 3px;
`
const Div = styled.div`
    width: 150px;
    height: 125px;
    background-color: white;
    border-radius: 10px;
    margin: 25px 25px 10px 25px;
`
// const Timer = props => {

//     const [hour, changeHour] = React.useState(0);
//     const [min, changeMin] = React.useState(0);
//     const [doing, start] = React.useState(0);

class Timer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            sec : 0,
            min : 0,
            doing : 0
        }
    }


    // tick(){
    //     let t = this.state.min * 60 + this.state.sec;
    //     let ID = setInterval(()=> {
    //         t = t-1; 

    //         }


    //     }, 1000)
    // }
    changeSec = e => {
        this.setState({sec : parseInt(e.target.value)});
    }
    changeMin = e => {
        this.setState({min : parseInt(e.target.value)});
    }
    start = () => {
        this.setState({doing : 1});
        // setInterval(tick, 1000);
    }




    render(){
        return(
            <Wrapper>
                {
                    this.state.doing?
                    <>
                        <Time time={this.state.min * 60 + this.state.sec} tick={this.tick}></Time>
                        
                    </>
                    :
                    <>
                        <Div>
                            <FlowerPot src={pot}/>
                        </Div>
                        <SetTime onChange={this.changeMin}/>분<SetTime onChange={this.changeSec}/>초
                        <Start onClick={this.start}>시작</Start>
                    </>
                }   
            </Wrapper>
        )
    }
}
export default Timer;