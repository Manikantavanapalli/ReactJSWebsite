import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/loginandregister/login';
import Register from './pages/loginandregister/register';
import ProjectSetup from './components/1.ProjectSetup/index';
import DependenciesList from './components/2.Dependencies';

const App: React.FC = () => {
  const isAuthenticated = false; // Replace this with your actual authentication logic

  return (
    <Router>
      <Routes>
        {/* Default route: Redirect based on authentication */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/register" replace />
            )
          }
        />
        {/* Specific Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projectsetup" element={<ProjectSetup />} />
        <Route path="/dependencieslist" element={<DependenciesList />} />
        {/* Fallback for invalid routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
