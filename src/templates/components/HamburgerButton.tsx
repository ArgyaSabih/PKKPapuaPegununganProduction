import { cn } from "@/libs/utils";

interface HamburgerButtonProps {
  isOpen: boolean;
  className: string;
  toggleOpen: () => void;
}

const HamburgerButton = ({ isOpen, className, toggleOpen }: HamburgerButtonProps) => {
  const bars = [
    { transformClass: "translate-y-[7px] rotate-45 duration-200" },
    { transformClass: "translate-y-[7px] opacity-0 duration-200" },
    { transformClass: "translate-y-[-7px] -rotate-45 duration-200" },
  ];

  return (
    <>
      <button onClick={toggleOpen} type="button" className={className}>
        {bars.map((bar) => (
          <div
            key={JSON.stringify(bar)}
            className={cn(
              "hamburger-bar bg-blue my-1 h-[3px] w-6 transform rounded-sm bg-blue-500 transition-transform duration-500",
              isOpen && bar.transformClass,
            )}
          />
        ))}
      </button>
    </>
  );
};

export default HamburgerButton;
