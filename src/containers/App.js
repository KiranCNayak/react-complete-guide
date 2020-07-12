import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid blue;
  padding: 8px;
  background-color: green;
  font: inherit;
  color: white;
  cursor: pointer;

  &:hover: {
    background-color: rgb(9, 179, 9);
    color: white;
  }
`;

class App extends Component {
  state = {
    buttonText: 'Show Items',
    persons: [
      {
        id: 0,
        name: 'Kiran C Nayak',
        age: 21
      },
      {
        id: 1,
        name: 'Kavya C Nayak',
        age: 20
      },
      {
        id: 2,
        name: 'Sadhana D Gaonkar',
        age: 52
      }
    ]
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.find((person) => person.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons
    });
  };

  deletePersonHandler = (personIndex) => {
    // const personsList = this.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons
    });
  };
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
      buttonText: this.state.showPersons ? 'Show Items' : 'Hide Items'
    });
  };
  render() {
    const assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className='App'>
        <StyledButton onClick={this.togglePersonsHandler}>
          {this.state.buttonText}
        </StyledButton>
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
        />
      </div>
    );
  }
}

export default App;
