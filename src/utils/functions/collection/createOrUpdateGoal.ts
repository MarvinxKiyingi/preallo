import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/clientApp';

export const createOrUpdateGoal = async (
  userId: string,
  needPercentage: number = 50,
  wantPercentage: number = 30,
  savePercentage: number = 20
) => {
  const goalRef = doc(db, 'goal', userId);

  try {
    const goalSnap = await getDoc(goalRef);

    // Always create the document if it doesn't exist
    if (!goalSnap.exists()) {
      await setDoc(goalRef, {
        needPercentage,
        wantPercentage,
        savePercentage,
      });
    } else {
      // Optionally: handle an update if needed (this part could be extended)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error creating/updating goal:', error);
  }
};
