import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-8">
        <header>
          <h1 className="text-5xl font-bold text-orange-600">Contentul</h1>
        </header>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/content?type=books" className="text-blue-500 hover:underline">
                Books
              </Link>
            </li>
            <li>
              <Link href="/content?type=movies" className="text-blue-500 hover:underline">
                Movies
              </Link>
            </li>
            <li>
              <Link href="/content?type=articles" className="text-blue-500 hover:underline">
                Articles
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}