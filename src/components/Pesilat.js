import React from 'react';
import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Button, useToast } from '@chakra-ui/react';
import { db } from '../config/firebase-config';
import PesilatDataServices from '../services/pesilat-service';
import { collection, query, onSnapshot } from 'firebase/firestore';

const Pesilat = ({ getPesilatId }) => {
  const [pesilat, setPesilat] = useState([]);
  const toast = useToast();

  // const tampilPesilat = async (e) => {
  //   const data = await PesilatDataServices.tampilAllPesilat();
  //   setPesilat(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  const handleHapus = async (id) => {
    try {
      await PesilatDataServices.hapusPesilat(id);
      toast({
        title: `Data Pesilat Berhasil Dihapus`,
        status: 'success',
        position: 'top-right',
      });
    } catch (err) {
      toast({
        title: `Data Pesilat Gagal Dihapus`,
        status: 'error',
        position: 'top-right',
      });
    }
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
    <Table variant="striped" border="1px" borderColor="gray.200">
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
            <Td w="5%">{index + 1}</Td>
            <Td>{pslt.nama}</Td>
            <Td>{pslt.tingkat}</Td>
            <Td>{pslt.kategori}</Td>
            <Td>
              <Button size="xs" colorScheme="red" onClick={() => handleHapus(pslt.id)}>
                Delete
              </Button>
              <Button size="xs" ml={2} colorScheme="green" onClick={() => getPesilatId(pslt.id)}>
                Edit
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Pesilat;
