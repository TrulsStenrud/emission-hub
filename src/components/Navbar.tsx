import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

const linkClassNames = (isActive: boolean) =>
  classNames(' rounded-md px-1 border', isActive ? ' ' : ' border-transparent');

const NavBar: React.FC = () => {
  return (
    <>
      <nav className={'w-full my-3 '}>
        <div className={'flex gap-5 w-fit m-auto'}>
          <NavLink className={(it) => linkClassNames(it.isActive)} to={'/totals'}>
            Page one
          </NavLink>
          <NavLink className={(it) => linkClassNames(it.isActive)} to={'/test'}>
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
