import { CreateLazyChunk } from './helpers/CreateLazyChunk';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyles';
import { Toaster } from 'react-hot-toast';
import { MainNavApp } from 'components/MainNavApp/MainNavApp';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';

const ContactsPage = CreateLazyChunk('ContactsPage');
const LoginPage = CreateLazyChunk('LoginPage');
const RegisterPage = CreateLazyChunk('RegisterPage');

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <Routes>
        <Route path="/" element={<MainNavApp />}>
          <Route
            path="register"
            element={
              <PublicRoute restricted>
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
    </>
  );
}

export default App;
