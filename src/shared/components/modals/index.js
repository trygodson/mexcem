import React from 'react';
import Modal from 'react-modal';
import { X } from 'react-bootstrap-icons';
import Height from '../height/height';
import './index.scss';

export function ModalTitleIcon({ ...props }) {
  return (
    <div className="modal-icon" style={{ background: props.background }}>
      {props.icon}
    </div>
  );
}

function index({ children, ...props }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: `${props.width || 450}px`,
      padding: 'none',
      background: 'none',
      border: 'none',
      ...props.customModalStyle,
    },
    overlay: {
      background: 'rgba(0,0,0,0.2)',
    },
  };
  return (
    <Modal
      isOpen={true}
      onAfterOpen={() => {}}
      onRequestClose={() => {}}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <X
        size={28}
        color="white"
        className="modal-close-icon hoverPointer"
        onClick={props.closeModal}
      />
      <Height val={30} />
      <div className={`modal-body ${props.customModalBodyClass}`}>
        {children}
      </div>
    </Modal>
  );
}

export default index;
