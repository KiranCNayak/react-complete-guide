import React from 'react';
import Person from './Person';

const Persons = (props) =>
  props.persons.map((person, index) => {
    return <Person
      clicked={() => props.clicked(index)}
      age={person.age}
      key={person.id}
      name={person.name}
    />
  });

export default Persons;
