import { FC } from "react";
import Logo from "@/presentation/public/assets/logo.svg";
import LogoBonus from "@/presentation/public/assets/logo-bonus.svg";

interface IHeaderProps {
  bonus?: boolean;
  score?: number;
}

export const Header: FC<IHeaderProps> = ({ bonus = false, score = 0 }) => {
  return (
    <div
      className="
        max-w-[44.0625rem]
        mx-auto
        border-[0.1875rem]
        border-gray
        rounded-2xl
        pr-6
        pl-7
        py-4
        mt-[2.875rem]
        flex
        justify-between
        items-center
        "
    >
      <h1>
        {bonus ? (
          <LogoBonus alt="Rock, Paper, Scissors, Lizard, Spock" />
        ) : (
          <Logo alt="Rock, Paper, Scissors" />
        )}
      </h1>

      <div className="bg-white w-[9.375rem] text-center py-[1.125rem] rounded-lg">
        <p className="uppercase leading-none text-lg tracking-[0.0625em] text-blue">
          score
        </p>
        <p className="text-[3.875rem] leading-none text-gray font-bold">
          {score.toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};
