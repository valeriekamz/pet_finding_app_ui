import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
};

const Button = ({ type, title, icon }: ButtonProps) => {
  return (
    <button
    className="flex items-center justify-center gap-2 rounded-full bg-[#5A00D6] text-white text-sm font-medium px-4 py-2 hover:bg-opacity-90 transition-all duration-300 ease-in-out"
    type={type}
    >
      {icon && <Image src={icon} alt={title} width={13} height={13} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
