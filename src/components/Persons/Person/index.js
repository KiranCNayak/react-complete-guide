import React, { PureComponent } from 'react';
import classes from './Person.css';

class Person extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Person contructor...');
  }
  render() {
    return (
      <div className={classes.Person} onClick={this.props.clicked}>
        <p>Hi! I'm {this.props.name}</p>
        <p>
          I'm {this.props.age} {this.props.age === '1' ? 'year' : 'years'} old
        </p>
        <input type='text' onChange={this.props.changed} />
      </div>
    );
  }
}

export default Person;
