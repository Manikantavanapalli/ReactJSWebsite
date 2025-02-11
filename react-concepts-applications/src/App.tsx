import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/loginandregister/login'));
const Register = lazy(() => import('./pages/loginandregister/register'));
const ProjectSetup = lazy(() => import('./components/1.ProjectSetup/index'));
const DependenciesList = lazy(() => import('./components/2.Dependencies'));
const ReactElements = lazy(()=> import('./components/3.React-Elements/index'));
const ViteTool = lazy(()=> import('./components/4.Vite-workExecution/index'));
const JsxElements = lazy(()=> import('./components/5.JsxElements/index'));
const ComponentTypes = lazy(()=> import('./components/6.ComponentsTypes/index'));
const Props = lazy(()=> import('./components/7.Props/index'));
const State = lazy(()=> import('./components/8.State/index'));



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
          <Route path="/ReactElements" element={<PrivateRoute element={<ReactElements />} />} />
          <Route path="/ViteTool" element={<PrivateRoute element={<ViteTool />} />} />
          <Route path="/JsxElements" element={<PrivateRoute element={<JsxElements />} />} />
          <Route path="/ComponentTypes" element={<PrivateRoute element={<ComponentTypes />} />} />
          <Route path="/Props" element={<PrivateRoute element={<Props />} />} />
          <Route path="/State" element={<PrivateRoute element={<State />} />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
