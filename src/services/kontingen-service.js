import { db } from '../config/firebase-config';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const kontingenCollectionRef = collection(db, 'tb-kontingen');
class KontingenDataServices {
  tambahKontingen = (newKontingen) => {
    return addDoc(kontingenCollectionRef, newKontingen);
  };

  updateKontingen = (id, updatedKontingen) => {
    const kontingenDoc = doc(db, 'tb-kontingen', id);
    return updateDoc(kontingenDoc, updatedKontingen);
  };

  hapusKontingen = (id) => {
    const kontingenDoc = doc(db, 'tb-kontingen', id);
    return deleteDoc(kontingenDoc, id);
  };

  tampilAllKontingen = () => {
    return getDocs(kontingenCollectionRef);
  };

  tampilKontingenById = (id) => {
    const kontingenDoc = doc(db, 'tb-kontingen', id);
    return getDoc(kontingenDoc);
  };
}

export default new KontingenDataServices();
