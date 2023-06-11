import React, { useContext, createContext } from 'react';
import { IAppContext } from '../../model/IAppContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase/clientApp';
import { IChildren } from '../../model/IChildren';
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { IModalForm } from '../../model/IModalForm';
import { useAuth } from './AuthContext';

// Initiating context
export const AppContext = createContext({} as IAppContext);

// Exporting the context, to be used wherever
export const useApp = () => useContext(AppContext);

export const AppContextProvider = ({ children }: IChildren) => {
  const { currentUser } = useAuth();

  const createMonth = (data: IModalForm) => {
    if (currentUser) {
      const monthRef = doc(db, 'Months', currentUser.uid);
      setDoc(monthRef, { months: [{ month: data.category }] });
      // try {
      //   if (!months) {
      //     return setDoc(monthRef, { months: [data.category] });
      //   } else {
      //     return updateDoc(monthRef, {
      //       months: arrayUnion(data.category),
      //     });
      //   }
      // } catch (error) {
      //   alert(error);
      // }
    }
  };

  // Auth provider values
  const values = {
    createMonth,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
