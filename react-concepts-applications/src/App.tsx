import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/loginandregister/login'));
const Register = lazy(() => import('./pages/loginandregister/register'));
const ProjectSetup = lazy(() => import('./components/1.ProjectSetup/index'));
const DependenciesList = lazy(() => import('./components/2.Dependencies'));

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = Boolean(localStorage.getItem('authToken')); // Replace with actual logic
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={localStorage.getItem('authToken') ? '/home' : '/login'} replace />}
          />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/projectsetup" element={<PrivateRoute element={<ProjectSetup />} />} />
          <Route path="/dependencieslist" element={<PrivateRoute element={<DependenciesList />} />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
