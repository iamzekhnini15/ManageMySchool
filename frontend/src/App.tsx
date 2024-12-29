import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { AuthProvider } from './context/AuthContext';
import PublicLayout from './layouts/PublicLayout';
import AuthenticatedLayout from './layouts/AuthentificatedLayout';


import Home from './pages/public/Home';
import About from './pages/public/About';
import Class from './pages/admin/Classes';
import Teachers from './pages/admin/Teachers';

function App() {
  return (
    <AuthProvider>
      <NextUIProvider>
        <Router>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route element={<AuthenticatedLayout />}>
              <Route path="/classes" element={<Class />} />
              <Route path="/teachers" element={<Teachers />} />
            </Route>
          </Routes>
        </Router>
      </NextUIProvider>
    </AuthProvider>
  );
}

export default App;
