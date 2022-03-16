import React, { useState } from 'react';
import FormPesilat from './components/FormPesilat';
import Pesilat from './components/Pesilat';
import { Container, VStack } from '@chakra-ui/react';

function App() {
  const [pesilatId, setPesilatId] = useState('');
  const handlerGetPesilatId = (id) => {
    setPesilatId(id);
    console.log(id);
  };
  return (
    <div className="App">
      <VStack>
        <Container maxW="container.xl" centerContent>
          <FormPesilat />
        </Container>
        <Container maxW="container.xl" centerContent>
          <Pesilat getPesilatId={handlerGetPesilatId} />
        </Container>
      </VStack>
    </div>
  );
}

export default App;
