import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/auth-selectors';
import authOperations from '../../redux/authorization/auth-operations';
// import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  email: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <div style={styles.container}>
      <span style={styles.email}> {email}</span>

      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
