import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter
import HomePage from './Components/Home/Homepage';
import BookingPage from './Components/BookingPage/BookingPage';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
</Routes>
</Router>
  );
}

export default App;
