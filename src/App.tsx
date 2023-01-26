import React, {useState} from "react";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import "./App.css";
import EmissionBarChart from "./components/EmissionBarChart";
import CompanyDropDown from "./components/CompanyDropDown";

function App() {
    return (
        <BrowserRouter basename="/emission-hub">
            <Routes>
                <Route path="/">
                    <Route path="/" element={<Navigate to="/totals"/>}/>
                    <Route path="totals" element={<PageOne/>}/>
                </Route>
                <Route path="*" element={<NoPathFound/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

const NoPathFound: React.FC = () => {
    return <div>404 GONE</div>
}

export type CompInfoType = {
    name: string
    csvIndex: number
}

const PageOne: React.FC = () => {
    const [comp, setCompIndex] = useState<CompInfoType>({name: "", csvIndex: -1})
    return (
        <div className="App">
            <h1>Emission highlights</h1>
            <CompanyDropDown setEmissionDataIndex={setCompIndex}/>
            <EmissionBarChart compIndex={comp.csvIndex}/>
        </div>
    );
};

export default App;
