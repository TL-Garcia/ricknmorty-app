import { Outlet } from 'react-router-dom';
import { Link } from '../components/link/Link';

export default function Layout() {
  return (
    <>
      <h1>Rick and Morty</h1>
      <nav>
        <Link href="/locations">Locations</Link>
        <Link href="/episodes">Episodes</Link>
      </nav>
      <Outlet />
    </>
  );
}
