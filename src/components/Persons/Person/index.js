import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context'

class Person extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Person contructor...');
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  // This is compulsory in class based components, if the context must be used like this --> this.context
  static contextType = AuthContext;

  render() {
    return (
      <Aux>
        {this.context.authenticated ? <p style={{ color: 'green' }}>Authenticated !</p> :
          <p style={{ color: 'red' }}>Please Login !</p>}
        <p onClick={this.props.clicked}>Hi! I'm {this.props.name}</p>
        <p>
          I'm {this.props.age} {this.props.age === '1' ? 'year' : 'years'} old
        </p>
        <input
          type='text'
          // ref={(inputElemRefWhateverNameCanBeGiven) => {
          //   this.inputRef = inputElemRefWhateverNameCanBeGiven;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
