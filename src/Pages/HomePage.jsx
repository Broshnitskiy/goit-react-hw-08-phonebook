import phoneBookImage from '../img/phone-book-img.jpg';

const styles = {
  container: {
    width: '1000px',
    height: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundImage: `url(${phoneBookImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  h1: {
    textAlign: 'center',
    paddingTop: 36,
  },
};

export function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Welcome to the phone book</h1>
    </div>
  );
}
