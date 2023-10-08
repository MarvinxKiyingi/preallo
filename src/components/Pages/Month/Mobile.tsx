import { IMonthPage } from '../../../model/IMonthPage';
import MobileWrapper from '../../Container/MobileWrapper';
import { MobileNavigation } from '../../Navigation/MobileNavigation/MobileNavigation';

const Mobile = ({ session, month, year, salary }: IMonthPage) => {
  const imgUrl = session?.user?.image;

  return (
    <MobileWrapper>
      <MobileNavigation title={month} src={imgUrl ? imgUrl : undefined} />
      <div>
        <h1>{month}</h1>
        <p>{salary}</p>
        <p>{year}</p>
      </div>
    </MobileWrapper>
  );
};

export default Mobile;
