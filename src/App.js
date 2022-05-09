import { CreateLazyChunk } from './helpers/CreateLazyChunk';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GlobalStyle } from './components/GlobalStyles';
import { Toaster } from 'react-hot-toast';
import { MainNavApp } from 'components/MainNavApp/MainNavApp';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import { getIsFetchingCurrent } from './redux/authorization/auth-selectors';
import authOperations from './redux/authorization/auth-operations';

const HomePage = CreateLazyChunk('HomePage');
const ContactsPage = CreateLazyChunk('ContactsPage');
const LoginPage = CreateLazyChunk('LoginPage');
const RegisterPage = CreateLazyChunk('RegisterPage');

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 5000 }} />
      {!isFetchingCurrentUser && (
        <Routes>
          <Route path="/" element={<MainNavApp />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
