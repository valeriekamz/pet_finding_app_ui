import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t-0">
      <div className="flex justify-between items-center flex-wrap mt-1 sm:px-8 px-3 py-8">
        {/* <p>@2024 Carhub. All Rights Reserved</p> */}
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
          <Link href="/" className="text-gray-500">
            Technical Support
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
