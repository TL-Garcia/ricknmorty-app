import { Outlet } from 'react-router-dom';
import './Layout.scss';
import { Hero } from './components/hero/Hero';
import { NavBar } from './components/nav-bar/NavBar';

export default function Layout() {
  return (
    <div className="layout">
      <Hero />
      <div className="layout__content-wrapper">
        <div className="layout__content">
          <NavBar />
          <Outlet />
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Rick and Morty Fan App. All rights reserved.</p>
      </footer>
    </div>
  );
}
