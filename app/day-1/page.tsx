"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DurationLine from "./components/DurationLine";

import JapanImg1 from "@/public/japan_1.jpg";
import JapanImg2 from "@/public/japan_2.jpg";
import JapanImg3 from "@/public/japan_3.jpg";
import JapanImg4 from "@/public/japan_4.jpg";
import JapanImg5 from "@/public/japan_5.jpg";
import JapanImg6 from "@/public/japan_6.jpg";
import JapanImg7 from "@/public/japan_7.jpg";

const images = [
  JapanImg1,
  JapanImg2,
  JapanImg3,
  JapanImg4,
  JapanImg5,
  JapanImg6,
  JapanImg7,
];

export default function Page1() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto progress logic
  useEffect(() => {
    setProgress(0); // Reset on slide change

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current!);
          handleNext();
          return 0;
        }
        return prev + 0.8; 
      });
    }, 100);

    return () => clearInterval(intervalRef.current!);
  }, [slideNumber]);

  const handlePrev = () => {
    setSlideNumber((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideNumber((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const modifyOnClick = (direction: "increase" | "decrease") => {
    if (direction === "decrease") {
      handlePrev();
    } else {
      handleNext();
    }
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-white">
      <div className="w-[550px] h-[320px] rounded-2xl overflow-hidden relative">
        {/* Progress bars */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1 z-20">
          {images.map((_, i) => (
            <DurationLine key={i} filled={i < slideNumber ? 100 : i === slideNumber ? progress : 0} />
          ))}
        </div>

        {/* Slide image */}
        <Image
          key={slideNumber}
          className="w-full h-full absolute object-cover transition-opacity duration-300"
          src={images[slideNumber]}
          fill
          alt={`Japan image ${slideNumber + 1}`}
          quality={100}
          unoptimized
        />

        {/* Controls */}
        <div className="absolute z-30 bottom-5 right-3 flex gap-1">
          <div
            className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center cursor-pointer"
            onClick={() => modifyOnClick("decrease")}
          >
            <ChevronLeft className="text-white w-5" />
          </div>
          <div
            className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center cursor-pointer"
            onClick={() => modifyOnClick("increase")}
          >
            <ChevronRight className="text-white w-5" />
          </div>
        </div>
      </div>
    </main>
  );
}
