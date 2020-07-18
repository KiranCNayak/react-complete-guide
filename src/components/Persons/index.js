import React, {PureComponent} from 'react';
import Person from './Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps...');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate...');
  //   return (nextProps.persons !== this.props.persons || nextProps.changed !==this.props.changed || nextProps.clicked !== this.props.clicked)
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate...');
    return {
      message: 'Snapshot set!!',
    };
  }

  // componentWillUnmount() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate...');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount...');
  }

  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Persons constructor...');
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          clicked={() => this.props.clicked(index)}
          age={person.age}
          key={person.id}
          name={person.name}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    })
  }
}

export default Persons;
