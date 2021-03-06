import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons';
import Cockpit from '../components/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor...');
    this.state = {
      authenticated: false,
      changeCounter: 0,
      persons: [
        { id: 0, name: 'Kiran C Nayak', age: 21 },
        { id: 1, name: 'Kavya C Nayak', age: 20 },
        { id: 2, name: 'Sadhana D Gaonkar', age: 52 },
      ],
      showPersons: false,
      showCockpit: true,
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps...')
  //   return state;
  // }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount...');
  // }

  UNSAFE_componentDidMount() {
    console.log('[App.js] UNSAFE_componentDidMount...');
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate...');
    return true; // this is required!! As in any other case, there won't be any update
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount...');
  }

  UNSAFE_componentWillMount() {
    console.log('[App.js] componentWillMount...');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id,
    );
    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    // const personsList = this.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons,
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  loginHandler = () => {
    this.setState((prevState, props) => ({
      authenticated: !prevState.authenticated,
    }))
  }

  render() {
    console.log('[App.js] render...');
    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({
              showCockpit: !this.state.showCockpit,
            });
          }}>
          Show Hide Cockpit
        </button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler,
        }}>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.title}
              toggle={this.togglePersonsHandler}
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
            />
          ) : null}
          {this.state.showPersons ? (
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
            />
          ) : null}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
