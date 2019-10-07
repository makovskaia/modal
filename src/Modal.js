import React from 'react';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

const ModalPage = ({ isOpen, toggle }) => (
  <div>
    <Modal open={isOpen} onClose={toggle} >
      <div>
        hello
      </div>
    </Modal>
  </div>
)

export default ModalPage