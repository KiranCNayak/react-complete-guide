import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons';
import Cockpit from '../components/Cockpit';

class App extends Component {
  state = {
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
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );
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
      showPersons: !this.state.showPersons
    });
  };

  render() {

    return (
      <div className={classes.App}>
        <Cockpit
        title = {this.props.title}
          toggle={this.togglePersonsHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
        />
        {this.state.showPersons ? <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        /> : null}
      </div>
    );
  }
}

export default App;
