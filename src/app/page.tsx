import Link from 'next/link';

export default function Home() {
  return (
    <div className="container text-center pt-10">
      <h1 className="text-3xl font-bold">Welcome to Hostnet Bio</h1>
      <p className="mt-2">One link for all your profiles</p>
      <div className="mt-6">
        <Link href="/ceosolace" className="text-blue-600 dark:text-blue-400">
          → View ceosolace
        </Link>
      </div>
    </div>
  );
}
