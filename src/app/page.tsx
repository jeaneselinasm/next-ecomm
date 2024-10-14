import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="p-2">
      <h1>Hello World</h1>
      <Link href="/users">To Users</Link>
      <ProductCard />
    </main>
  );
}
