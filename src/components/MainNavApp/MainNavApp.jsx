import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Link, Nav } from './MainNavApp.styled';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from '../../redux/authorization/auth-selectors';

export const MainNavApp = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <header>
        <Nav>
          <ul>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Nav>
      </header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};
