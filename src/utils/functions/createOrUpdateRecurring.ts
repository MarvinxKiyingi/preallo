import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { IAddExpenseForm } from '../../model/IModalForm';
import { db } from '../firebase/clientApp';
import { IMonth } from '@/model/IMonth';
import { v4 as uuidv4 } from 'uuid';
import { formatDate } from './formatDate';
import { formatNumberWithDecimal } from './formatNumberWithDecimal';

export const createOrUpdateRecurring = async (
  data: IAddExpenseForm,
  userId: string,
  month?: IMonth
) => {
  const subscriptionsRef = doc(db, 'recurring', userId);
  const subscriptionsSnap = await getDoc(subscriptionsRef);

  const expenseProperties = {
    uuid: uuidv4(),
    createdAt: formatDate(),
    amount: data.amount,
    amountAsString: formatNumberWithDecimal(data.amount),
    expense: data.expense,
    category: data.selected,
    purpose: data.selectedTwo,
    status: data.selectedThree,
    monthDetails: {
      monthName: month?.monthName || '',
      year: month?.year || '',
      slug: month?.slug || '',
    },
  };

  try {
    if (subscriptionsSnap.exists()) {
      return updateDoc(subscriptionsRef, {
        subscriptions: arrayUnion({
          ...expenseProperties,
        }),
      });
    } else {
      return setDoc(subscriptionsRef, {
        subscriptions: [{ ...expenseProperties }],
      });
    }
  } catch (error) {
    alert(error);
  }
};
