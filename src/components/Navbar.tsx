import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';
import { URL_TABLES, URL_TOTALS } from '../App';

const linkClassNames = (isActive: boolean) =>
  classNames(' rounded-md px-1 border', isActive ? ' ' : ' border-transparent');

const NavBar: React.FC = () => {
  return (
    <>
      <nav className={'w-full my-3 '}>
        <div className={'flex gap-5 w-fit m-auto'}>
          <NavLink className={(it) => linkClassNames(it.isActive)} to={URL_TOTALS}>
            Page one
          </NavLink>
          <NavLink className={(it) => linkClassNames(it.isActive)} to={URL_TABLES}>
            Page one
          </NavLink>
        </div>
      </nav>
      <div className={' min-h-screen '}>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
