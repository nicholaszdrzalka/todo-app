import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Todo } from './pages/Todo';
import { Calendar } from './pages/Calendar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Todo' element={<Todo />} />
        <Route path='/Calendar' element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
