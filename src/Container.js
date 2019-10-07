import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from './Modal'

const Container = ({ isOpen, toggleModal }) => (
  <Router>
    <div>
      <input type="switch"/>
      <Link to="/modal">
        Next Screen
      </Link>
      <Route path="/modal" component={Modal}/>
    </div>
  </Router>
)

export default Container