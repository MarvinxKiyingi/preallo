import { arrayUnion, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/clientApp';

export const createOrUpdateYears = async (
  userId: string,
  currentYear: string,
  isNewUser?: boolean,
  isNewYear?: boolean
) => {
  const docRef = doc(db, 'years', userId);
  const docSnap = await getDoc(docRef);

  try {
    // If new user or "years" doesn't exist, create one
    if (isNewUser || !docSnap.exists) {
      setDoc(doc(db, 'years', userId), {
        yearList: [currentYear],
      });
    }
    if (isNewYear) {
      // If new year, update yeaList with the new year
      setDoc(doc(db, 'years', userId), {
        yearList: arrayUnion(currentYear),
      });
    }
  } catch (error) {
    console.log(error);
  }
};
