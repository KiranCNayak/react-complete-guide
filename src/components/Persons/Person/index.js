import React, { PureComponent } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Person contructor...');
  }
  render() {
    return (
      // <div className={classes.Person} onClick={this.props.clicked}>
      <Aux>
        <p>Hi! I'm {this.props.name}</p>
        <p>
          I'm {this.props.age} {this.props.age === '1' ? 'year' : 'years'} old
        </p>
        <input type='text' onChange={this.props.changed} value={this.props.name}/>
      </Aux>
      // </div>
    );
  }
}

export default withClass(Person, classes.Person );
