import React from 'react';
import MainContent from './pages/Maincontent';
import Page1 from './pages/page1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </Router>
  );
};

export default App;
