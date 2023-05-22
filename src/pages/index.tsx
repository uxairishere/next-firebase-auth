import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Link href="/login">
        Login
      </Link>
      <Link href="/signup">
        Register
      </Link>
    </div>
  );
}
