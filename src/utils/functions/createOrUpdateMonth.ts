import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { IModalForm } from '../../model/IModalForm';
import { db } from '../firebase/clientApp';
import { currentYear } from './currentYear';

export const createOrUpdateMonth = async (data: IModalForm, userId: string) => {
  const monthRef = doc(db, 'months', userId);
  const monthSnap = await getDoc(monthRef);
  const slug = `${data.selected?.toLocaleLowerCase()}-${currentYear()}`;

  const monthProperties = {
    month: data.selected,
    salary: data.amount,
    year: currentYear(),
    slug: slug,
  };

  try {
    if (monthSnap.exists()) {
      return updateDoc(monthRef, {
        months: arrayUnion({
          ...monthProperties,
        }),
      });
    } else {
      return setDoc(monthRef, {
        months: [{ ...monthProperties }],
      });
    }
  } catch (error) {
    alert(error);
  }
};
