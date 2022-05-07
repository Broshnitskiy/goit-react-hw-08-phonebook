// import React from 'react';
import { Link } from './AuthNav.styled';

// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#E84A5F',
//   },
// };

export function AuthNav() {
  return (
    <div style={{ marginLeft: 'auto' }}>
      <Link to="/register">Registration</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
