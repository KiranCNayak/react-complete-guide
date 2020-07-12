import React from 'react';
import classes from './Person.css'

const person = (props) => {
  return (
    <div className={classes.Person} onClick={props.clicked}>
      <p>Hi! I'm {props.name}</p>
      <p>
        I'm {props.age} {props.age === '1' ? 'year' : 'years'} old
      </p>
      <input type='text' onChange={props.changed}/>
    </div>
  );
};

export default person;
