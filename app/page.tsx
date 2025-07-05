import Link from "next/link";

export default function Home() {
  return (
    <section className="p-3">
      <h1 className="text-4xl font-bold mb-4">30 Days UI Challage</h1>
      <div>
        <Link href={"/day-1"} className="underline">Day 1 - Google Location Overview Carousel Slider</Link>
      </div>
    </section>
  );
}
