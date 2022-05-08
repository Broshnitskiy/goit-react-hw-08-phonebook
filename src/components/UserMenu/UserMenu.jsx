import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/auth-selectors';
import authOperations from '../../redux/authorization/auth-operations';
import { Container } from './UserMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <Container>
      <span> {email}</span>

      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </Container>
  );
}
