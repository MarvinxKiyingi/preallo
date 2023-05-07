import { IChildren } from '../../model/IChildren';
import Container from './Container';

const AppContainer = ({ children }: IChildren) => {
  return <Container>{children}</Container>;
};

export default AppContainer;
