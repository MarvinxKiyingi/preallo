import { IMonthPage } from '../../../model/IMonthPage';
import ContentContainer from '../../Container/ContentContainer';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';

const Desktop = ({ month, year, salary, slug }: IMonthPage) => {
  return (
    <>
      <DesktopNavigation
        disableHighlight={month?.toLowerCase()}
        month={month}
        monthSlug={slug}
      />
      <ContentContainer>
        <h1>{month}</h1>
        <p>{salary}</p>
        <p>{year}</p>
      </ContentContainer>
    </>
  );
};

export default Desktop;
