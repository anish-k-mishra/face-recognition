import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#e0e0e0]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-4xl text-center">The Ultimate Facial Recognizer</h1>

        <ol className="list-inside list-decimal text-sm text-center font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get your expressions analyzed!
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row justify-center">
          <Link href="/signup" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-[120px]">
            Sign Up
          </Link>
          <Link href="/login" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-[120px]">
            Login
          </Link>
        </div>
      </main>
    </div>
  );
}
