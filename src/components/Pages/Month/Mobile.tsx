import { IMonthPage } from '../../../model/IMonthPage';
import { MobileNavigation } from '../../Navigation/MobileNavigation/MobileNavigation';

const Mobile = ({ currentUser, month, year, salary }: IMonthPage) => {
  return (
    <>
      <MobileNavigation
        title={month}
        src={currentUser?.photoURL ? currentUser.photoURL : undefined}
      />
      <div>
        <h1>{month}</h1>
        <p>{salary}</p>
        <p>{year}</p>
      </div>
    </>
  );
};

export default Mobile;
