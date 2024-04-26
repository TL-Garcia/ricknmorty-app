import { Link } from '../../../../components/link/Link';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <img src="logo.png" width={350} />
      </Link>
    </header>
  );
};
