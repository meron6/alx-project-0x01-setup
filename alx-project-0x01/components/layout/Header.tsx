import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <h1 className="text-2xl font-bold">My App</h1>
      <nav className="flex space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/posts" className="hover:underline">Posts</Link>
        <Link href="/users" className="hover:underline">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
