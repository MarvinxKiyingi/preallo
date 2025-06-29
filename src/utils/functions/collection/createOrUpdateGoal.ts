import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/clientApp';

export const createOrUpdateGoal = async (
  userId: string,
  needPercentage?: number,
  wantPercentage?: number,
  savePercentage?: number
) => {
  const goalRef = doc(db, 'goal', userId);
  const goalSnap = await getDoc(goalRef);

  const defaultGoal = {
    needPercentage: 50,
    wantPercentage: 30,
    savePercentage: 20,
  };

  try {
    if (goalSnap.exists()) {
      await updateDoc(goalRef, {
        needPercentage,
        wantPercentage,
        savePercentage,
      });
    } else {
      return await setDoc(goalRef, {
        ...defaultGoal,
      });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error submitting goal data:', error);
  }
};
