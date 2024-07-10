import Arrow from "../assets/right.svg";
import cursorImage from "../assets/cursor.png";
import message from "../assets/message.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className=" text-white bg-hero-bg py-[72px] sm:py-[96px] relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] lg:w-[2400px] lg:-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-radial-hero top-[calc(100%-96px)] sm:top-[calc(100%-120px)] sm:w-[1536px] sm:h-[768px]"></div>
      <div className="container relative">
        <div className="flex justify-center items-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-span-gradient text-transparent bg-clip-text [-webkit-bakground-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-2">
              <span>Read More </span>
              <Arrow />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One Task <br /> at a Time
            </h1>
            <Image
              src={cursorImage}
              alt="cursor"
              height="200"
              width="200"
              className="absolute right-[474px] top-[108px] hidden sm:inline"
            />
            <Image
              src={message}
              alt="message"
              height="200"
              width="200"
              className="absolute left-[499px] top-[98px] hidden sm:inline"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
