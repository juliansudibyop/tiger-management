import React, { useState } from 'react';
import FormPesilat from '../components/FormPesilat';
import TablePesilat from '../components/TablePesilat';

function Pesilat() {
  const [pesilatId, setPesilatId] = useState('');
  const handleGetPesilatId = (id) => {
    setPesilatId(id);
  };
  return (
    <div className="Pesilat">
      <FormPesilat id={pesilatId} setPesilatId={setPesilatId} />
      <TablePesilat getPesilatId={handleGetPesilatId} />
    </div>
  );
}

export default Pesilat;
