import { useState } from 'react';
import { useAddContactMutation } from '../../redux/contacts/contactSlice';
import PropTypes from 'prop-types';
import { Spinner } from '../Spinner/Spinner';
import toast from 'react-hot-toast';
import { Form } from './ContactForm.styled';

export const ContactForm = ({ contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact, { isLoading, isError }] = useAddContactMutation();

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    const isExistContact = contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );

    if (isExistContact) {
      toast.error(`${newContact.name} is already in contacts`);
    } else {
      createContact(newContact);
      toast.success('Successfully added!');
      resetInput();
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      {isLoading && <Spinner />}
      <label>
        Name &#8594;
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number &#8594;
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="contact number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
      {isError && <p>Error adding contact</p>}
      <></>
    </Form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
