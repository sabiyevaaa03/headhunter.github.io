import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Work from './sources/Work';
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="work" element={<Work />} />
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);