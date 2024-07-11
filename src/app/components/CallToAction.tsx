import Helix from "../assets/helix2.png";
import Emoji from "../assets/emojistar.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <Image
          src={Helix}
          alt="Helix image"
          className="absolute top-6 left-[calc(100%-36px)] hidden sm:inline"
        />
        <Image
          src={Emoji}
          alt="Emoji image"
          className="absolute -top-[120px] right-[calc(100%-24px)] hidden sm:inline"
        />
        <h2 className="text-center font-bold tracking-tighter text-5xl sm:text-6xl sm:max-w-[648px] mx-auto">
          Get instant access
        </h2>
        <p className="text-center text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>

        <form className="mt-10 flex flex-col sm:flex-row justify-center max-w-sm mx-auto gap-2.5">
          <input
            type="email"
            placeholder="Your@email.com"
            className=" py-4 bg-white/20 rounded-lg px-5 flex-1 font-medium placeholder:text-[#9ca3af]"
          />

          <button className="bg-white text-black py-4  rounded-lg font-medium px-5 ">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
