import Link from "next/link";

export default function Home() {
  return (
    <section className="p-3">
      <h1 className="text-4xl font-bold mb-4">30 Days UI Challage</h1>
      <div className="flex flex-col gap-3">
        <Link href={"/day-1"} className="underline">Day 1 - Google Location Overview Carousel Slider</Link>
        <Link href={"/day-2"} className="underline">Day 2 - Freelancer Card UI</Link>
      </div>
    </section>
  );
}
