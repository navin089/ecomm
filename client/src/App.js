import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PrivateRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
