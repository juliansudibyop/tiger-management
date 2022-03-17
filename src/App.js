import React, { useState } from 'react';
import FormPesilat from './components/FormPesilat';
import Pesilat from './components/Pesilat';
import Kontingen from './components/Kontingen';
import { Container, VStack } from '@chakra-ui/react';
import FormKontingen from './components/FormKontingen';

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
    </div>
  );
}

export default App;
