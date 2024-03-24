import { IMonthPage } from '../../../model/IMonthPage';
import ContentContainer from '../../Container/ContentContainer';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';

const Desktop = ({ month }: IMonthPage) => {
  const { monthName, salary, slug, year } = month;
  return (
    <>
      <DesktopNavigation
        disableHighlight={monthName?.toLowerCase()}
        monthName={monthName}
        monthSlug={slug}
      />
      <ContentContainer>
        <h1>{monthName}</h1>
        <p>{salary}</p>
        <p>{year}</p>
      </ContentContainer>
    </>
  );
};

export default Desktop;
