import React from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if(props.persons.length <=1){
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm react app</h1>
      <p>This is really working</p>
      <button className='fas' onClick={togglePersonsHandler}>
        Toggle
      </button>
    </div>
  );
};

export default Cockpit;
