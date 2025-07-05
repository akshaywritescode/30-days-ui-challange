export default function DurationLine({ filled }: { filled: number }) {
  return (
    <div className="relative w-[71px] h-[2px] bg-white/30 rounded-full overflow-hidden">
      <div
        className="absolute h-full bg-white transition-all duration-100"
        style={{ width: `${filled}%` }}
      ></div>
    </div>
  );
}
