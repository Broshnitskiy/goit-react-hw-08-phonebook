// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export function UserMenu() {
  //   const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUsername);
  //   const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <span style={styles.name}> email</span>
      <button type="button">Log out</button>
      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}> */}
    </div>
  );
}
