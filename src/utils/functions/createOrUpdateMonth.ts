import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { IModalForm } from '../../model/IModalForm';
import { db } from '../firebase/clientApp';
import { currentYear } from './currentYear';

export const createOrUpdateMonth = async (data: IModalForm, userId: string) => {
  const monthRef = doc(db, 'Months', userId);
  const monthSnap = await getDoc(monthRef);

  try {
    if (monthSnap.exists()) {
      return updateDoc(monthRef, {
        months: arrayUnion({
          month: data.selected,
          salary: data.amount,
          year: currentYear(),
        }),
      });
    } else {
      return setDoc(monthRef, {
        months: [
          {
            month: data.selected,
            salary: data.amount,
            year: currentYear(),
          },
        ],
      });
    }
  } catch (error) {
    alert(error);
  }
};
