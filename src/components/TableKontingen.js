import React from 'react';
import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Button, useToast } from '@chakra-ui/react';
import { db } from '../config/firebase-config';
import KontingenDataServices from '../services/kontingen-service';
import { collection, query, onSnapshot } from 'firebase/firestore';

const TableKontingen = ({ getKontingenId }) => {
  const [kontingen, setKontingen] = useState([]);
  const toast = useToast();

  // const tampilPesilat = async (e) => {
  //   const data = await PesilatDataServices.tampilAllPesilat();
  //   setPesilat(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  const handleHapus = async (id) => {
    try {
      await KontingenDataServices.hapusKontingen(id);
      toast({
        title: `Data Kontingen Berhasil Dihapus`,
        status: 'success',
        position: 'top-right',
      });
    } catch (err) {
      toast({
        title: `Data Kontingen Gagal Dihapus`,
        status: 'error',
        position: 'top-right',
      });
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'tb-kontingen'));
    const tampilKontingenRealtime = onSnapshot(q, (querySnapshot) => {
      let kontingenArray = [];
      querySnapshot.forEach((doc) => {
        kontingenArray.push({ ...doc.data(), id: doc.id });
      });
      setKontingen(kontingenArray);
    });
    return () => tampilKontingenRealtime();
  }, []);
  return (
    <Table variant="striped" border="1px" borderColor="gray.200">
      <TableCaption placement="top">Table Kontingen</TableCaption>
      <Thead>
        <Tr>
          <Th>No</Th>
          <Th>Nama Kontingen</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {kontingen.map((ktng, index) => (
          <Tr key={ktng.id}>
            <Td w="5%">{index + 1}</Td>
            <Td>{ktng.nama}</Td>
            <Td>
              <Button size="xs" colorScheme="red" onClick={() => handleHapus(ktng.id)}>
                Delete
              </Button>
              <Button size="xs" ml={2} colorScheme="green" onClick={() => getKontingenId(ktng.id)}>
                Edit
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableKontingen;
