import { UserCredential } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/clientApp';
import { createOrUpdateYearList } from '../createOrUpdateYears';

export const createOrUpdateYears = async (
  data: UserCredential,
  currentYear: string
) => {
  const docRef = doc(db, 'Years', data.user?.uid);
  const docSnap = await getDoc(docRef);
  const dbYearList = docSnap.data()?.yearList;

  try {
    // Checks if there is already a yearList in the db, if so then update db list.
    if (docSnap.exists().valueOf()) {
      setDoc(doc(db, 'Years', data.user.uid), {
        yearList: createOrUpdateYearList(currentYear, dbYearList),
      });
    } else {
      // If there isn't a list in db, this is where it will be created.
      setDoc(doc(db, 'Years', data.user.uid), {
        yearList: createOrUpdateYearList(currentYear, [currentYear]),
      });
    }
  } catch (error) {
    alert(error);
  }
};
