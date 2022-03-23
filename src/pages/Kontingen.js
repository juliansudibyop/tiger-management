import React, { useState } from 'react';
import FormKontingen from '../components/FormKontingen';
import TableKontingen from '../components/TableKontingen';
import { Container } from '@chakra-ui/react';

function Kontingen() {
  const [kontingenId, setKontingenId] = useState('');
  const handleGetKontingenId = (id) => {
    setKontingenId(id);
  };
  return (
    <div className="Kontingen">
      <Container maxW="container.xl" centerContent>
        <FormKontingen id={kontingenId} setKontingenId={setKontingenId} />
        <TableKontingen getKontingenId={handleGetKontingenId} />
      </Container>
    </div>
  );
}

export default Kontingen;
