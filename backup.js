import React from 'react';
import { useEffect, useState } from 'react';
import {
  Container,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
} from '@chakra-ui/react';
import { db } from '../config/firebase-config';
import PesilatDataServices from '../services/pesilat-service';
import { collection, query, onSnapshot } from 'firebase/firestore';

const Pesilat = () => {
  const [pesilat, setPesilat] = useState([]);
  const [nama, setNama] = useState('');
  const [tingkat, setTingkat] = useState('SD');
  const [kategori, setKategori] = useState('Perorangan');
  const toast = useToast();

  const tampilPesilat = async (e) => {
    const data = await PesilatDataServices.tampilAllPesilat();
    setPesilat(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPesilat = {
      nama,
      tingkat,
      kategori,
    };
    try {
      await PesilatDataServices.tambahPesilat(newPesilat);
      setNama('');
      toast({
        title: `Data Pesilat Berhasil Disimpan`,
        status: 'success',
        position: 'top-right',
      });
    } catch (err) {
      toast({
        title: `Data Pesilat Gagal Disimpan`,
        status: 'error',
        position: 'top-right',
      });
    }
  };

  const handleHapus = async (id) => {
    try {
      await PesilatDataServices.hapusPesilat(id);
    } catch (err) {}
  };

  useEffect(() => {
    const q = query(collection(db, 'tb-pesilat'));
    const tampilPesilatRealtime = onSnapshot(q, (querySnapshot) => {
      let pesilatArray = [];
      querySnapshot.forEach((doc) => {
        pesilatArray.push({ ...doc.data(), id: doc.id });
      });
      setPesilat(pesilatArray);
    });
    return () => tampilPesilatRealtime();
  }, []);
  return (
    <VStack>
      <Container maxW="container.xl" centerContent>
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
          <Button mt={2} colorScheme="blue">
            Edit
          </Button>
        </FormControl>
      </Container>
      <Container maxW="container.xl">
        <Table variant="striped" size="sm" border="1px" borderColor="gray.200">
          <TableCaption placement="top">Table Pesilat</TableCaption>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Nama Pesilat</Th>
              <Th>Tingkat</Th>
              <Th>Kategori</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {pesilat.map((pslt, index) => (
              <Tr key={pslt.id}>
                <Td>{index + 1}</Td>
                <Td>{pslt.nama}</Td>
                <Td>{pslt.tingkat}</Td>
                <Td>{pslt.kategori}</Td>
                <Td>
                  <Button size="xs" colorScheme="red" onClick={() => handleHapus(pslt.id)}>
                    Delete
                  </Button>
                  <Button size="xs" colorScheme="red">
                    Edit
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </VStack>
  );
};

export default Pesilat;
