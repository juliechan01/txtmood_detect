import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import EditText from './views/EditText';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/' default/>
          <Route element={<EditText />} path='/texts/:id' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;