import React from 'react';
import rootReducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Container from './Container'

const store  = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
