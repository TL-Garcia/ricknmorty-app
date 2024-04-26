import { Link } from '../link/Link';
import { NavLink } from '../link/NavLink';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <h1 className="header__title">Rick and Morty</h1>
      </Link>
      <nav className="header__navbar">
        <NavLink href="/locations">Locations</NavLink>
        <NavLink href="/episodes">Episodes</NavLink>
      </nav>
    </header>
  );
};
