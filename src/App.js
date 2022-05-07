import { CreateLazyChunk } from './helpers/CreateLazyChunk';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyles';
import { Toaster } from 'react-hot-toast';
import { MainNavApp } from 'components/MainNavApp/MainNavApp';

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
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
