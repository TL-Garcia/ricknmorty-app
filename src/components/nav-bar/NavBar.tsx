import { NavLink } from '../link/NavLink';
import './NavBar.scss';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink href="/locations">Locations</NavLink>
      <NavLink href="/episodes">Episodes</NavLink>
    </nav>
  );
};
