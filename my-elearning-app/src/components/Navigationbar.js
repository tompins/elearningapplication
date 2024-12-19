// src/components/Navigationbar.js
import Link from 'next/link';

const Navigationbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/page1">Page 1</Link></li>
        <li><Link href="/page2">Page 2</Link></li>
        <li><Link href="/page3">Page 3</Link></li>
      </ul>
      <style jsx>{`
        nav {
          background: #333;
          padding: 1rem;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: space-around;
        }
        li {
          margin: 0 1rem;
        }
        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default Navigationbar;
