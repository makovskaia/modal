import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

const propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
}

const ModalPage = ({ isOpen, toggle }) => (
  <div>
    modal
    <Modal open={isOpen} onClose={toggle} >
      <div>
        hello
      </div>
    </Modal>
    <Link to="/">
      <Button>Home</Button>
    </Link>
  </div>
)

ModalPage.propTypes = propTypes

export default ModalPage