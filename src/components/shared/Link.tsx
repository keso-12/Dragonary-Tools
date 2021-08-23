import React from 'react';
import { Link } from 'react-router-dom';

const CleanLink = ({ path, children } : {path: string, children: React.ReactNode}) => (
  <Link to={path} style={{ textDecoration: 'none' }}>
    {children}
  </Link>
);

export default CleanLink;
