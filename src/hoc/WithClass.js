import React from 'react';
const withClass = (WrappedComponent, stylingClass) => {
  return (props) => (
    <div className={stylingClass}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
