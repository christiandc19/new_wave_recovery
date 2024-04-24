import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import SoberLivingPage from './routes/SoberLivingPage'
import AboutPage from './routes/AboutPage'
import CareerPage from './routes/CareerPage'
import ContactPage from './routes/ContactPage'

import HuntingtonBeachPage from './routes/HuntingtonBeachPage';
import WestHollywoodPage from './routes/WestHollywoodPage';
import VenicePage from './routes/VenicePage';
import NorthCitrus from './routes/NorthCitrusPage';
import NorthDetroit from './routes/NorthDetroitPage';


ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />

      <Route exact path='/huntington-beach' element={<HuntingtonBeachPage />} />
      <Route exact path='/west-hollywood' element={<WestHollywoodPage />} />
      <Route exact path='/venice' element={<VenicePage />} />
      <Route exact path='/north-citrus' element={<NorthCitrus />} />
      <Route exact path='/north-detroit' element={<NorthDetroit />} />

      <Route exact path='/sober-living' element={<SoberLivingPage />} />

      <Route exact path='/about' element={<AboutPage />} />
      <Route exact path='/career' element={<CareerPage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

