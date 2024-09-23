import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/clientApp';

export const createOrUpdateYears = async (
  userId: string,
  currentYear: string,
  isNewYear: boolean = false
) => {
  const docRef = doc(db, 'years', userId);

  try {
    const docSnap = await getDoc(docRef);

    // If the document doesn't exist or it's a new user, create the document with the current year
    if (!docSnap.exists()) {
      await setDoc(docRef, {
        yearList: [currentYear], // initialize yearList with the current year
      });
    } else if (isNewYear) {
      // If it's a new year, update the document to add the new year to the yearList
      await updateDoc(docRef, {
        yearList: arrayUnion(currentYear), // append the new year without overwriting
      });
    }
  } catch (error) {
    console.error('Error creating/updating years:', error);
  }
};
