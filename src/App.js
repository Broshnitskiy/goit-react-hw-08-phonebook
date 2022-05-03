import { useState } from 'react';
import { useFetchContactsQuery } from './redux/contacts/contactSlice';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import { GlobalStyle } from './components/GlobalStyles';
import { Toaster } from 'react-hot-toast';
import { Spinner } from './components/Spinner/Spinner';

function App() {
  const [filter, setFilter] = useState('');
  const { data: contacts, isError, isFetching } = useFetchContactsQuery();

  const handleChange = e => {
    setFilter(e.target.value);
  };
  return (
    <>
      <GlobalStyle />
      <Toaster />

      <section style={{ padding: '20px' }}>
        <h1
          style={{
            marginBottom: '20px',
            textAlign: 'center',
            color: 'blue',
            fontSize: '50px',
          }}
        >
          Phonebook
        </h1>
        <ContactForm contacts={contacts} />
        <div>
          {contacts?.length !== 0 ? (
            <>
              <h2
                style={{
                  textAlign: 'center',
                  color: 'green',
                  fontSize: '40px',
                }}
              >
                Contacts
              </h2>
              <Filter value={filter} handleChange={handleChange} />
            </>
          ) : (
            <p style={{ textAlign: 'center' }}>No saved contacts</p>
          )}

          {isFetching && <Spinner />}
          {isError && <p>Something wrong</p>}
          {contacts && <ContactList filter={filter} contacts={contacts} />}
        </div>
      </section>
    </>
  );
}

export default App;
