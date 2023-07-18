import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import EditText from './views/EditText';
import './App.css';
// import '../tailwind.config';

function App() {

  return (
    <div className='bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-800 h-screen'>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/' default/>
          <Route element={<EditText />} path='/texts/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;