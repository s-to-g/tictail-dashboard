import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = (props) => {
  return (
    <div className="Modal">
      <div className="Modal-box">
        { props.children }
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired
}

export default Modal;
