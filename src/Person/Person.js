import React from "react";
//import "./Person.css";
import styled from 'styled-components'


const StyledDiv=styled.div`
    width: 50%;
    margin: auto;
    border:1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 12px;
    text-align: center;

    @media min-width(100px) {
       width:50px;
    }
`;
const person=(props)=>{ 
    const style={
        // '@media min-width(100px)':{
        //     width:'50px'
        // }
    }
    return (
        <StyledDiv className='Person' style={style}>
                <p  onClick={props.click}>I am {props.name} and age {props.age} person</p>
                <p>{props.children}</p>
                <input type='text' onChange={props.changed} value={props.name}></input>
        </StyledDiv>
    )
}

export default person
    