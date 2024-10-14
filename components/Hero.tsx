import Image from "next/image";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col-reverse gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2">
      {/* Left side (text) */}
      <div className="flex flex-col justify-center xl:w-1/2 pl-10 -mt-20">
        <h1 className="text-5xl font-bold mb-6">
          Discover Your New Best Friend
        </h1>
        {/* Search Bar Section */}
        <div className="mt-12 w-full flex items-center gap-4">
          <SearchBar />
        </div>
      </div>

      {/* Right side (image) */}
      <div className="relative z-20 flex flex-1 justify-end xl:w-1/2 -mt-20">
        <Image
          src="/girl.png"
          alt="Person with dogs"
          width={550}
          height={420}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
