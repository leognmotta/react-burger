import React from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  let transform = 'translateY(-100vh)';
  let opacity = '0';
  if (props.show) {
    transform = 'translateY(0)';
    opacity = '1';
  }

  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{ transform: transform, opacity: opacity }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;
