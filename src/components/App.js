import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './public/Home';
import Navbar from './templates/Navbar';
import '../styles/style.scss';
import Login from './auth/Login';
import Register from './auth/Register';
import Discover from './coops/coops/maincontrollers/Discover';
import SingleCoop from './coops/coops/singlecoop/SingleCoopPage';
import CreateCoopForm from './coops/coops/MainControllers/CreateCoopForm';
import UserPage from './user/UserPage';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/coop/:coopId" element={<SingleCoop />} />
      <Route path="/coop/create" element={<CreateCoopForm />} />
      <Route path="/user/:userId" element={<UserPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
