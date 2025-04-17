import Link from "next/link";

export default () => {
  return (
    <header className="p-4 flex justify-between items-center max-w-[60em] mx-auto">
      <h1 className="font-bold text-2xl">Logo</h1>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};
