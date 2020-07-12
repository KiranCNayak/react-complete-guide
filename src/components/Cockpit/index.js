import React from 'react';
import classes from './Cockpit.css';

// const StyledButton = styled.button`
//   border: 1px solid blue;
//   padding: 8px;
//   background-color: green;
//   font: inherit;
//   color: white;
//   cursor: pointer;

//   &:hover: {
//     background-color: rgb(9, 179, 9);
//     color: white;
//   }
// `;

const Cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = [];
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClass} onClick={props.toggle}>
        Toggle
      </button>
    </div>
  );
};

export default Cockpit;
