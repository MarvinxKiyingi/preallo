import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { IAddMonthForm } from '../../model/IModalForm';
import { db } from '../firebase/clientApp';
import { currentYear } from './currentYear';
import { v4 as uuidv4 } from 'uuid';
import { formatNumberWithDecimal } from './formatNumberWithDecimal';

export const createOrUpdateMonth = async (
  data: IAddMonthForm,
  userId: string
) => {
  const monthRef = doc(db, 'months', userId);
  const monthSnap = await getDoc(monthRef);
  const slug = `${data.selected?.toLocaleLowerCase()}-${currentYear()}`;

  const monthProperties = {
    uuid: uuidv4(),
    monthName: data.selected,
    salary: data.amount,
    salaryAsString: formatNumberWithDecimal(data.amount),
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
