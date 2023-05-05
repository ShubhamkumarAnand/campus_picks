import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-700 flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href="https://campuspick.vercel.app"
        className="bg-green-500 p-2 rounded-md font-bold hover:bg-green-700 hover:scale-105"
      >
        Campus Pick
      </Link>
    </main>
  );
}
