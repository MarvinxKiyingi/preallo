import React from 'react';
import { IChildren } from '../../model/IChildren';
import Container from './Container';

export const AuthContainer = ({ children }: IChildren) => {
  return <Container desktopColumns='1.3fr 1fr'>{children}</Container>;
};
