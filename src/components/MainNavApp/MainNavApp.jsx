import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, Nav } from './MainNavApp.styled';
import { AuthNav } from '../AuthNav/AuthNav';

export const MainNavApp = () => {
  return (
    <>
      <header>
        <Nav>
          <ul>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
          <AuthNav />
        </Nav>
      </header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};
