import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { toggleModal } from './actions';
import ModalPage from './Modal';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';


const Container = ({ isOpen, toggle }) => (
  <Router>
    <div>
      <Switch checked={isOpen} onChange={toggle} />
      <Link to="/modal" style={{ all: 'unset' }}>
        <Button>to modal</Button>
      </Link>
      <Route path="/modal" component={props => <ModalPage {...props} isOpen={isOpen} toggle={toggle} />} />
    </div>
  </Router>
)


const mapStateToProps = state => ({
  isOpen: state.isOpen
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
