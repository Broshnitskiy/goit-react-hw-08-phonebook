import { useState } from 'react';
import { useFetchContactsQuery } from '../redux/contacts/contactSlice';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Spinner } from '../components/Spinner/Spinner';

const styles = {
  section: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px',
  },
  h1: {
    marginBottom: '20px',
    textAlign: 'center',
    color: 'blue',
    fontSize: '50px',
  },
  h2: {
    textAlign: 'center',
    color: 'green',
    fontSize: '40px',
    marginBottom: '20px',
  },
  p: { textAlign: 'center' },
};

export function ContactsPage() {
  const [filter, setFilter] = useState('');
  const {
    data: contacts,
    isError,
    isFetching,
  } = useFetchContactsQuery(undefined, { refetchOnMountOrArgChange: true });

  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <section style={styles.section}>
      <h1 style={styles.h1}>Phonebook</h1>
      <ContactForm contacts={contacts} />
      <div>
        {contacts?.length !== 0 ? (
          <>
            <h2 style={styles.h2}>Contacts</h2>
            <Filter value={filter} handleChange={handleChange} />
          </>
        ) : (
          <p style={styles.p}>No saved contacts</p>
        )}

        {isFetching && <Spinner />}
        {isError && <p>Something wrong</p>}
        {contacts && <ContactList filter={filter} contacts={contacts} />}
      </div>
    </section>
  );
}
