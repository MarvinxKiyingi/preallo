import { IMonthPage } from '../../../model/IMonthPage';
import { MobileNavigation } from '../../Navigation/MobileNavigation/MobileNavigation';

const Mobile = ({ session, month, year, salary }: IMonthPage) => {
  const { user } = session;
  const imgUrl = user?.image;

  return (
    <>
      <MobileNavigation title={month} src={imgUrl ? imgUrl : undefined} />
      <div>
        <h1>{month}</h1>
        <p>{salary}</p>
        <p>{year}</p>
      </div>
    </>
  );
};

export default Mobile;
