import React, { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      <div
        className="spinner-border"
        style={{ width: '4rem', height: '4rem' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
}
