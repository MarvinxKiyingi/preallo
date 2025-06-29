import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { IAddExpenseForm, IEditMonthForm } from '../../model/IModalForm';
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
    status: data.selectedThree,
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

export const updateExistingExpense = async (
  data: IEditMonthForm,
  userId: string
) => {
  const expensesRef = doc(db, 'expenses', userId);
  const expensesSnap = await getDoc(expensesRef);

  if (!expensesSnap.exists()) {
    throw new Error('No expenses found');
  }

  const expenses = expensesSnap.data()?.expenses || [];
  const expenseIndex = expenses.findIndex(
    (expense: any) => expense.uuid === data.uuid
  );

  if (expenseIndex === -1) {
    throw new Error('Expense not found');
  }

  const updatedExpense = {
    ...expenses[expenseIndex],
    amount: data.amount,
    amountAsString: formatNumberWithDecimal(data.amount),
    expense: data.expense,
    category: data.selected,
    purpose: data.selectedTwo,
    status: data.selectedThree,
  };

  const updatedExpenses = [...expenses];
  updatedExpenses[expenseIndex] = updatedExpense;

  try {
    return updateDoc(expensesRef, {
      expenses: updatedExpenses,
    });
  } catch (error) {
    alert(error);
  }
};
