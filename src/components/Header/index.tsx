import { ReactElement } from 'react';
import Link from 'next/link';

export default function Header(): ReactElement {
  return (
    <header>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
}
