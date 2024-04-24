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

import ALCOHOL from './routes/ALCOHOL';
import COCAINE from './routes/COCAINE';
import FENTANYL from './routes/FENTANYL';
import HEROIN from './routes/HEROIN';
import KRATOM from './routes/KRATOM';

import AcuteStressDisorder from './routes/AcuteStressDisorder';
import ADHD from './routes/ADHD';
import AngerDisorder from './routes/AngerDisorder';
import Anxiety from './routes/Anxiety';
import BipolarDisorder from './routes/BipolarDisorder';
import Depression from './routes/DepressionPage';
import PanicDisorder from './routes/PanicDisorderPage';
import PTSD from './routes/PTSDPage';
import Schizoaffective from './routes/SchizoaffectivePage';
import Schizophrenia from './routes/SchizophreniaPage';

import DetoxHeroin from './routes/DetoxHeroin';
import DetoxAlcohol from './routes/DetoxAlcohol';
import DetoxCocaine from './routes/DetoxCocaine';
import DetoxBenzodiazepines from './routes/DetoxBenzodiazepines';
import DetoxMethamphetamine  from './routes/DetoxMethamphetamine';
import DetoxMarijuana  from './routes/DetoxMarijuana';
import DetoxAdderall  from './routes/DetoxAdderall';



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

      <Route exact path='/alcohol' element={<ALCOHOL />} />
      <Route exact path='/cocaine' element={<COCAINE />} />
      <Route exact path='/fentanyl' element={<FENTANYL />} />
      <Route exact path='/heroin' element={<HEROIN />} />
      <Route exact path='/kratom' element={<KRATOM />} />

      <Route exact path='/acute-stress-disorder' element={<AcuteStressDisorder />} />
      <Route exact path='/adhd' element={<ADHD />} />
      <Route exact path='/anger-disorder' element={<AngerDisorder />} />
      <Route exact path='/anxiety' element={<Anxiety />} />
      <Route exact path='/bipolar-disorder' element={<BipolarDisorder />} />
      <Route exact path='/depression' element={<Depression />} />
      <Route exact path='/panic-disorder' element={<PanicDisorder />} />
      <Route exact path='/ptsd' element={<PTSD />} />
      <Route exact path='/schizoaffective' element={<Schizoaffective />} />
      <Route exact path='/schizophrenia' element={<Schizophrenia />} />

      <Route exact path='/detox-heroin' element={<DetoxHeroin />} />
      <Route exact path='/detox-alcohol' element={<DetoxAlcohol />} />
      <Route exact path='/detox-cocaine' element={<DetoxCocaine />} />
      <Route exact path='/detox-benzodiazepines' element={<DetoxBenzodiazepines />} />
      <Route exact path='/detox-Methamphetamine' element={<DetoxMethamphetamine />} />
      <Route exact path='/detox-Marijuana' element={<DetoxMarijuana />} />
      <Route exact path='/detox-Adderall' element={<DetoxAdderall />} />


    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

