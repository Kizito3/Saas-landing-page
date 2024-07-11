'use client'
import { useState } from "react";
import Plus from "../assets/plus2.svg";
import clsx from "clsx";
import { FaMinus } from "react-icons/fa";

export const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span> {isOpen === false ? <Plus /> : <FaMinus/> }
      </div>
      <div className={clsx('mt-4',{ hidden: !isOpen, "": isOpen === true })}>
        {answer}
      </div>
    </div>
  );
};
