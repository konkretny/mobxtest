import React from 'react';
import StoreProvider from './providers/StoreProvider'
import Form from './Form'
import News from './News'
import './App.css';

function App() {
  return (
    <StoreProvider>
      <div>
        <h1>
          Some form
        </h1>
        <News />
        <Form />
      </div>
    </StoreProvider>
  );
}

export default App;
