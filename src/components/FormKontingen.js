import React from 'react';
import { useEffect, useState } from 'react';
import { FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react';
import KontingenDataServices from '../services/kontingen-service';
const FormKontingen = ({ id, setKontingenId }) => {
  const [nama, setNama] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newKontingen = {
      nama,
    };
    try {
      if (id !== undefined && id !== '') {
        await KontingenDataServices.updateKontingen(id, newKontingen);
        setNama('');
        setKontingenId('');
        toast({
          title: `Data Kontingen Berhasil Diupdate`,
          status: 'success',
          position: 'top-right',
        });
      } else {
        await KontingenDataServices.tambahKontingen(newKontingen);
        setNama('');
        toast({
          title: `Data Kontingen Berhasil Disimpan`,
          status: 'success',
          position: 'top-right',
        });
      }
    } catch (err) {
      toast({
        title: `Data Pesilat Gagal Disimpan`,
        status: 'error',
        position: 'top-right',
      });
    }
  };

  useEffect(() => {
    const handleEdit = async () => {
      try {
        const tampilKontingen = await KontingenDataServices.tampilKontingenById(id);
        setNama(tampilKontingen.data().nama);
      } catch (err) {}
    };
    if (id !== undefined && id !== '') {
      handleEdit();
    }
  }, [id]);
  return (
    <FormControl>
      <FormLabel>Nama Kontingen</FormLabel>
      <Input name="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
      <Button mt={2} colorScheme="blue" onClick={handleSubmit}>
        Simpan
      </Button>
    </FormControl>
  );
};

export default FormKontingen;
