import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { IAddExpenseForm } from '../../model/IModalForm';
import { db } from '../firebase/clientApp';
import { IMonth } from '@/model/IMonth';

export const createOrUpdateExpense = async (
  data: IAddExpenseForm,
  userId: string,
  month: IMonth
) => {
  const expensesRef = doc(db, 'expenses', userId);
  const expensesSnap = await getDoc(expensesRef);

  const expenseProperties = {
    amount: data.amount,
    expense: data.expense,
    category: data.selected,
    priority: data.selectedTwo,
    monthDetails: {
      month: month.month,
      year: month.year,
      slug: month.slug,
    },
  };

  try {
    if (expensesSnap.exists()) {
      return updateDoc(expensesRef, {
        expenses: arrayUnion({
          ...expenseProperties,
        }),
      });
    } else {
      return setDoc(expensesRef, {
        expenses: [{ ...expenseProperties }],
      });
    }
  } catch (error) {
    alert(error);
  }
};
