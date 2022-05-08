import React from 'react';
import { Link } from './AuthNav.styled';

export function AuthNav() {
  return (
    <div style={{ marginLeft: 'auto' }}>
      <Link to="/register">Registration</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
