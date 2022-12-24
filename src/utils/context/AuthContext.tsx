import React, { useContext, useMemo } from 'react';
import { IAuthContex } from '../../model/IAuthContex';
import { IAuthContexProvider } from '../../model/IAuthContexProvider';

// Initiating context
export const AuthContex = React.createContext({} as IAuthContex);

// Exporting the context, to be used wherever
export const useAuth = () => useContext(AuthContex);

export const AuthContexProvider = ({ children }: IAuthContexProvider) => {
  const name = 'Marvin';

  // Auth provider values
  const values = useMemo(() => ({ name }), []);

  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};
