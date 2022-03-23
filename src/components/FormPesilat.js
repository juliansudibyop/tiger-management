import React from 'react';
import { useEffect, useState } from 'react';
import { FormControl, FormLabel, Input, Select, Button, useToast } from '@chakra-ui/react';
import PesilatDataServices from '../services/pesilat-service';
const FormPesilat = ({ id, setPesilatId }) => {
  const [nama, setNama] = useState('');
  const [tingkat, setTingkat] = useState('SD');
  const [kategori, setKategori] = useState('Perorangan');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPesilat = {
      nama,
      tingkat,
      kategori,
    };
    try {
      if (id !== undefined && id !== '') {
        await PesilatDataServices.updatePesilat(id, newPesilat);
        setNama('');
        setPesilatId('');
        toast({
          title: `Data Pesilat Berhasil Diupdate`,
          status: 'success',
          position: 'top-right',
        });
      } else {
        await PesilatDataServices.tambahPesilat(newPesilat);
        setNama('');
        toast({
          title: `Data Pesilat Berhasil Disimpan`,
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
        const tampilPesilat = await PesilatDataServices.tampilPesilatById(id);
        setNama(tampilPesilat.data().nama);
        setTingkat(tampilPesilat.data().tingkat);
        setKategori(tampilPesilat.data().kategori);
      } catch (err) {}
    };
    if (id !== undefined && id !== '') {
      handleEdit();
    }
  }, [id]);
  return (
    <FormControl>
      <FormLabel>Nama Pesilat</FormLabel>
      <Input name="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
      <FormLabel>Tingkat Pesilat</FormLabel>
      <Select value={tingkat} onChange={(e) => setTingkat(e.target.value)}>
        <option value="SD">SD</option>
        <option value="SMP">SMP</option>
        <option value="SMA">SMA</option>
      </Select>
      <FormLabel>Kategori Pesilat</FormLabel>
      <Select value={kategori} onChange={(e) => setKategori(e.target.value)}>
        <option value="Perorangan">Perorangan</option>
        <option value="Berpasangan">Berpasangan</option>
        <option value="Berkelompok">Berkelompok</option>
      </Select>
      <Button mt={2} colorScheme="blue" onClick={handleSubmit}>
        Simpan
      </Button>
    </FormControl>
  );
};

export default FormPesilat;
