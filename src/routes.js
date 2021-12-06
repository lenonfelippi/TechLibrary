import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageHome } from './pages/Home';
import { PageBooks } from './pages/Books';
import { PageCreateBook } from './pages/Books/Create';
import { PageUpdateBook } from './pages/Books/Update';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/books" element={<PageBooks />} />
      <Route path="/books/create" element={<PageCreateBook />} />
      <Route path="/books/update/:id" element={<PageUpdateBook />} />
      <Route path="*" element={<h1>Not found :( </h1>} />
    </Routes>
  )
}
