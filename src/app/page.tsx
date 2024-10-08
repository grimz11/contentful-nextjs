import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <nav className="mb-8">
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