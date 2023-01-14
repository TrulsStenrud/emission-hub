import React from "react";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import "./App.css";
import EmissionBarChart from "./components/EmissionBarChart";

function App() {
    return (
        <BrowserRouter basename="/new-website-test">
            <Routes>
                <Route path="/">
                    <Route path="/" element={<Navigate to="/europris"/>}/>
                    <Route path="europris" element={<PageOne/>}/>
                </Route>
            </Routes>
            <Route path="*" element={<NoPathFound />}></Route>
        </BrowserRouter>
    );
}
const NoPathFound : React.FC = () => {
    return<div>404 GONE</div>
}

const PageOne: React.FC = () => {
    return (
        <div className="App">
            <h1>Europris emission highlights</h1>
            <EmissionBarChart />
        </div>
    );
};

export default App;