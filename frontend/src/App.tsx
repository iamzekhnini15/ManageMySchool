import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { AuthProvider } from './context/AuthContext';


import Home from './pages/Home';
import CreateStudent from './pages/createStudent';

function App() {
  return (
    <AuthProvider>
      <NextUIProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createStudent" element={<CreateStudent />} />
          </Routes>
        </Router>
      </NextUIProvider>
    </AuthProvider>
  );
}

export default App;
