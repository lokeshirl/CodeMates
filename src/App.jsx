import React from 'react';
import HomePage from './pages/HomePage';
import { Routes, Route, Link } from 'react-router-dom';
import EditorPage from './pages/EditorPage';

const App = () => {
  return (
    <>
      <div className="font-IBM_Flex">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
