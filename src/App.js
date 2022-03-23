import React from 'react';
import { Container, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kontingen from './pages/Kontingen';
import Pesilat from './pages/Pesilat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VStack>
          <Header />
          <Routes>
            <Route path="/" element={<Pesilat />} />
            <Route path="kontingen" element={<Kontingen />} />
          </Routes>
        </VStack>
      </BrowserRouter>
    </div>
  );
}

export default App;
