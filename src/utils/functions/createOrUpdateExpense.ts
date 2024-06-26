import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { IAddExpenseForm } from '../../model/IModalForm';
import { db } from '../firebase/clientApp';
import { IMonth } from '@/model/IMonth';
import { v4 as uuidv4 } from 'uuid';
import { formatDate } from './formatDate';
import { formatNumberWithDecimal } from './formatNumberWithDecimal';

export const createOrUpdateExpense = async (
  data: IAddExpenseForm,
  userId: string,
  month: IMonth
) => {
  const expensesRef = doc(db, 'expenses', userId);
  const expensesSnap = await getDoc(expensesRef);

  const expenseProperties = {
    uuid: uuidv4(),
    createdAt: formatDate(),
    amount: data.amount,
    amountAsString: formatNumberWithDecimal(data.amount),
    expense: data.expense,
    category: data.selected,
    purpose: data.selectedTwo,
    monthDetails: {
      monthName: month.monthName,
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
