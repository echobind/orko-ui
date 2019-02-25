import React from 'react';
import Link from 'next/link';
import { Navigation } from './styles';

export const Header = () => (
  <div>
    <Navigation>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Navigation>
  </div>
);
