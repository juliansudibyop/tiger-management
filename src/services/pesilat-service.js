import { db } from '../config/firebase-config';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const pesilatCollectionRef = collection(db, 'tb-pesilat');
class PesilatDataServices {
  tambahPesilat = (newPesilat) => {
    return addDoc(pesilatCollectionRef, newPesilat);
  };

  updatePesilat = (id, updatedPesilat) => {
    const pesilatDoc = doc(db, 'tb-pesilat', id);
    return updateDoc(pesilatDoc, updatedPesilat);
  };

  hapusPesilat = (id) => {
    const pesilatDoc = doc(db, 'tb-pesilat', id);
    return deleteDoc(pesilatDoc, id);
  };

  tampilAllPesilat = () => {
    return getDocs(pesilatCollectionRef);
  };

  tampilPesilatById = (id) => {
    const pesilatDoc = doc(db, 'tb-pesilat', id);
    return getDocs(pesilatDoc);
  };
}

export default new PesilatDataServices();
