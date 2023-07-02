import React, { useContext, createContext } from 'react';
import { IAppContext } from '../../model/IAppContext';
import { db } from '../firebase/clientApp';
import { IChildren } from '../../model/IChildren';
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { IModalForm } from '../../model/IModalForm';
import { useAuth } from './AuthContext';
import { currentYear } from '../functions/currentYear';

// Initiating context
export const AppContext = createContext({} as IAppContext);

// Exporting the context, to be used wherever
export const useApp = () => useContext(AppContext);

export const AppContextProvider = ({ children }: IChildren) => {
  const { currentUser } = useAuth();

  const createOrUpdateMonth = async (data: IModalForm) => {
    if (currentUser) {
      const monthRef = doc(db, 'Months', currentUser.uid);
      const monthSnap = await getDoc(monthRef);

      try {
        if (monthSnap.exists()) {
          return updateDoc(monthRef, {
            months: arrayUnion({
              month: data.selected,
              salary: data.amount,
              year: currentYear(),
            }),
          });
        } else {
          return setDoc(monthRef, {
            months: [
              {
                month: data.selected,
                salary: data.amount,
                year: currentYear(),
              },
            ],
          });
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  // App provider values
  const values = {
    createOrUpdateMonth,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
