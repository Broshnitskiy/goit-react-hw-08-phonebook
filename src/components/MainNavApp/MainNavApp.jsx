import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Link, Nav, Header } from './MainNavApp.styled';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getIsLoggedIn } from '../../redux/authorization/auth-selectors';

export const MainNavApp = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Header>
        <Nav>
          <ul>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Nav>
      </Header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};
