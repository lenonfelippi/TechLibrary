import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>Not found :( </h1>} />
    </Routes>
  )
}
