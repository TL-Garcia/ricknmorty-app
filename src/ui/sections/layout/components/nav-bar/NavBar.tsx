import { NavLink } from '../../../../components/link/NavLink';
import './NavBar.scss';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink href="/locations">
        <h2>Locations</h2>
      </NavLink>
      <NavLink href="/episodes">
        <h2>Episodes</h2>
      </NavLink>
    </nav>
  );
};
