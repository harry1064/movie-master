import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div class="lds-ripple">
        <div />
        <div />
      </div>
    );
  }
}

export default Loader;
