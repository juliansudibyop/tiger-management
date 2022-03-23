<<<<<<< HEAD
import React from 'react';
import { Container, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kontingen from './pages/Kontingen';
import Pesilat from './pages/Pesilat';
=======
import React, { useState } from 'react';
import FormPesilat from './components/FormPesilat';
import Pesilat from './components/Pesilat';
import Kontingen from './components/Kontingen';
import { Container, VStack } from '@chakra-ui/react';
import FormKontingen from './components/FormKontingen';
>>>>>>> 481325a3e958a83759c7cbc9b6dce60b71499142

function App() {
  // const [pesilatId, setPesilatId] = useState('');
  const [kontingenId, setKontingenId] = useState('');
  // const handleGetPesilatId = (id) => {
  //   setPesilatId(id);
  // };
  const handleGetKontingenId = (id) => {
    setKontingenId(id);
  };
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <VStack>
          <Header />
          <Routes>
            <Route path="/" element={<Pesilat />} />
            <Route path="kontingen" element={<Kontingen />} />
          </Routes>
        </VStack>
      </BrowserRouter>
=======
      <VStack>
        {/* <Container maxW="container.xl" centerContent>
          <FormPesilat id={pesilatId} setPesilatId={setPesilatId} />
        </Container> */}
        <Container maxW="container.xl" centerContent>
          <FormKontingen id={kontingenId} setKontingenId={setKontingenId} />
        </Container>
        {/* <Container maxW="container.xl" overflowX="auto" centerContent>
          <Pesilat getPesilatId={handleGetPesilatId} />
        </Container> */}
        <Container maxW="container.xl" centerContent>
          <Kontingen getKontingenId={handleGetKontingenId} />
        </Container>
      </VStack>
>>>>>>> 481325a3e958a83759c7cbc9b6dce60b71499142
    </div>
  );
}

export default App;
