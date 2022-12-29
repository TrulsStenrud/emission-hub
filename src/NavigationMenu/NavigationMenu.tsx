import classNames from "classnames";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./NavigationMenu.module.css";

const NavigationMenu: React.FC = () => {
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navLinks}>
          <NavLink
            className={(it) =>
              classNames(
                styles.navLink,
                it.isActive ? styles.selected : undefined
              )
            }
            to={"/pageOne"}
          >
            Page one
          </NavLink>
          <NavLink
            className={(it) =>
              classNames(
                styles.navLink,
                it.isActive ? styles.selected : undefined
              )
            }
            to={"/pageTwo"}
          >
            Page one
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavigationMenu;
