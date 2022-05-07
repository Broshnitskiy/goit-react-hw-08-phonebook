import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { List, Link, ListItem } from './MainNavApp.styled';

export const MainNavApp = () => {
  return (
    <>
      <header>
        <nav>
          <List>
            <li>
              <Link to="/contacts">Контакти</Link>
            </li>
            <ListItem>
              <Link to="/login">Логін</Link>
            </ListItem>
            <li>
              <Link to="/register">Реєстрація</Link>
            </li>
          </List>
        </nav>
      </header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};
