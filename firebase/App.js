import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/cadastro" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
