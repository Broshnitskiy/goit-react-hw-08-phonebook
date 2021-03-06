import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/auth-selectors';
import authOperations from '../../redux/authorization/auth-operations';
import { Container } from './UserMenu.styled';
import Button from '@mui/material/Button';

export function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <Container>
      <span> {email}</span>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </Container>
  );
}
