import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import EmissionBarChart from './components/EmissionBarChart';
import CompanyDropDown from './components/CompanyDropDown';
import NavBar from './components/Navbar';
import OverviewTable from './components/OverviewTable';

export const URL_TOTALS = '/totals';
export const URL_TABLES = '/tables';

function App() {
  return (
    <BrowserRouter basename={'/emission-hub'}>
      <Routes>
        <Route path={'/'} element={<NavBar />}>
          <Route path={'/'} element={<Navigate to={URL_TOTALS} />} />
          <Route path={URL_TOTALS} element={<PageOne />} />
          <Route path={URL_TABLES} element={<OverviewTable />} />
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
