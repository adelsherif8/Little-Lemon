import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/Homepage';
import BookingPage from './Components/BookingPage/BookingPage';
import ConfirmedBooking from './Components/ConfirmedBooking/ConfirmedBooking';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const generateTimes = (startHour, endHour) => {
  let times = [];
  for (let i = startHour; i <= endHour; i++) {
    const hour = i % 24;
    const formattedHour = hour < 10 ? `0${hour}:00` : `${hour}:00`;
    times.push(formattedHour);
  }
  return times;
};

export const getAvailableTimes = (date) => {
  const day = new Date(date).getDay();
  if (day >= 0 && day <= 4) {
    return generateTimes(12, 23);
  } else if (day === 5 || day === 6) {
    return [...generateTimes(12, 23), ...generateTimes(0, 2)];
  }
  return [];
};

export const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0];
  return getAvailableTimes(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

function App() {
  const submitAPI = async (formData) => {
    console.log("Submitting form data:", formData);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };

  const submitForm = async (formData) => {
    const response = await submitAPI(formData);
    if (response) {
      window.location.href = '/ConfirmedBooking';
    } else {
      console.log('Form submission failed');
    }
  };

  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    const newAvailableTimes = getAvailableTimes(newDate);
    dispatch({ type: 'UPDATE_TIMES', payload: newAvailableTimes });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              date={date}
              setDate={handleDateChange}
              time={time}
              setTime={setTime}
              guests={guests}
              setGuests={setGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
