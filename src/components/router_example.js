import React from 'react';
import {Link} from 'react-router-dom';

export const Root = ({text}) => (
  <div>
    <p>Root</p>
    <p>{text}</p>
    <Link to='/a'>A</Link>
  </div>
);

export const A = () => (
  <div>
    <p>A</p>
    <Link to='/b'>B</Link>
  </div>
);

export const B = () => (
  <div>
    <p>B</p>
    <Link to='/c'>C</Link>
  </div>
);

export const NotFound = () => (
  <div>
    <p>Not Found</p>
    <Link to='/'>Home</Link>
  </div>
);