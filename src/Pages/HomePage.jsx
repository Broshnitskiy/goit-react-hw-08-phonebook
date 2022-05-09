import phoneBookImage from '../img/phone-book-img.jpg';

const styles = {
  container: {
    width: '1200px',
    height: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundImage: `url(${phoneBookImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  h1: {
    fontSize: '48px',
    textAlign: 'center',
    color: 'rgba(226, 255, 0, 0.95)',
    paddingTop: 24,
  },
};

export function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Welcome to the phone book</h1>
    </div>
  );
}
