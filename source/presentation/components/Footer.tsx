import { BaseDialog } from "@/presentation/components/BaseDialog";
import { useState } from "react";
import CloseIcon from "@/presentation/public/assets/icon-close.svg";
import Rules from "@/presentation/public/assets/rules.svg";
import RulesBonus from "@/presentation/public/assets/rules-bonus.svg";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <footer className="w-screen flex justify-end p-8">
        <button
          onClick={() => setIsOpen(true)}
          className="
            uppercase
            text-white
            tracking-[0.125em]
            border
            rounded-lg
            w-32
            h-10
            transition-all
            duration-300
            hover:bg-white hover:bg-opacity-20"
        >
          Rules
        </button>
      </footer>
      <BaseDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex justify-between">
          <h2 className="uppercase text-blue text-lg leading-none">Rules</h2>
          <button onClick={() => setIsOpen(false)}>
            <span className="sr-only">close</span>
            <CloseIcon />
          </button>
        </div>

        <div className="flex items-center justify-center mt-12">
          <Rules />
        {/* <RulesBonus /> */}
        </div>

        
      </BaseDialog>
    </>
  );
};
