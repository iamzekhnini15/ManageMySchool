import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { AuthProvider } from './context/AuthContext';


import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
      <NextUIProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </NextUIProvider>
    </AuthProvider>
  );
}

export default App;
