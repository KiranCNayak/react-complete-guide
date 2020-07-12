import React, { useEffect } from 'react';
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
  useEffect(() => {
    console.log('[Cockpit/index.js] useEffect');
    // setTimeout(() => {
    //   alert('Saved Data');
    // }, 1000);
    return () => {
      console.log('[Cockpit/index.js] cleanup work in useEffect...');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit/index.js] 2nd useEffect');
    // setTimeout(() => {
    //   alert('Saved Data');
    // }, 1000);
    return () => {
      console.log('[Cockpit/index.js] cleanup work in 2nd useEffect...');
    };
  });
  const assignedClasses = [];
  let btnClass = [];
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClass} onClick={props.toggle}>
        Toggle
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
