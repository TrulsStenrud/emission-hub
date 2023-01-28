import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import EmissionBarChart from './components/EmissionBarChart';
import CompanyDropDown from './components/CompanyDropDown';
import NavBar from './components/Navbar';

function App() {
  return (
    <BrowserRouter basename={'/emission-hub'}>
      <Routes>
        <Route path={'/'} element={<NavBar />}>
          <Route path={'/'} element={<Navigate to={'/totals'} />} />
          <Route path={'totals'} element={<PageOne />} />
          <Route path={'test'} element={<h1>testing</h1>} />
        </Route>
        <Route path={'*'} element={<NoPathFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const NoPathFound: React.FC = () => {
  return <div>404 GONE</div>;
};

const PageOne: React.FC = () => {
  return (
    <div className={'App'}>
      <h1>Emission highlights</h1>
      <CompanyDropDown />
      <EmissionBarChart />
    </div>
  );
};

export default App;
