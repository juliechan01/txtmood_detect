import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import EditText from './views/EditText';
import './App.css';

function App() {
  const [ theme, setTheme ] = useState('light');
  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }

  return (
    <div className={` App ${theme} bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-800 h-screen`}>
      <BrowserRouter>
      <div className='rounded-full'>
        <button onClick={toggleTheme}>🌞 || 🌚</button>
      </div>
        <Routes>
          <Route element={<Main />} path='/' default/>
          <Route element={<EditText />} path='/texts/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;