import React, { Component } from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log('[Modal] WillUpdate');
  }

  render() {
    let transform = 'translateY(-100vh)';
    let opacity = '0';
    if (this.props.show) {
      transform = 'translateY(0)';
      opacity = '1';
    }
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{ transform: transform, opacity: opacity }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;
