import React from 'react';
import './Person.css'
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 2px #ccc;
padding: 16px;
text-align: center;

@media(min-width: 700px){
  width 450px
}
`
const person = (props) => {
  return (
    <StyledDiv className="Person" onClick={props.clicked}>
      <p>Hi! I'm {props.name}</p>
      <p>
        I'm {props.age} {props.age === '1' ? 'year' : 'years'} old
      </p>
      <p>
        My Hobbies: {props.children}
      </p>
    </StyledDiv>
  );
};

export default person;
