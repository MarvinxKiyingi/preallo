import router from 'next/router';
import { IMonthPage } from '../../../model/IMonthPage';
import ContentContainer from '../../Container/ContentContainer';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';

const Desktop = ({ session, month, year, salary }: IMonthPage) => {
  const currentPageRouteName = router.pathname.replace(/\//g, '');
  return (
    <>
      <DesktopNavigation disableHighlight={currentPageRouteName} />
      <ContentContainer>
        <h1>{month}</h1>
        <p>{salary}</p>
        <p>{year}</p>
      </ContentContainer>
    </>
  );
};

export default Desktop;
