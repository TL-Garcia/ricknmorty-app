import { Outlet } from 'react-router-dom';
import './Layout.scss';
import { Header } from '../components/header/Header';

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content-wrapper">
        <div className="content">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Rick and Morty Fan App. All rights reserved.</p>
      </footer>
    </div>
  );
}
