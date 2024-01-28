import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './styles/style.css'

import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import ErrorPage from './pages/ErrorPage'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/a-propos'
          element={<About />}
        />
        <Route
          path='/project/:id'
          element={<Project />}
        />
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
