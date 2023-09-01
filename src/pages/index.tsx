import Link from 'next/link';

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/about">
        About
      </Link>
    </div>
  );
}