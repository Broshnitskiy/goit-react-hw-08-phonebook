import { useDeleteContactMutation } from '../../redux/contacts/contactSlice';

import { ListItem } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ListItem>
      &#9742; {name}: {number};
      {isDeleting ? (
        <p>Deleting...</p>
      ) : (
        <button type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      )}
    </ListItem>
  );
};
