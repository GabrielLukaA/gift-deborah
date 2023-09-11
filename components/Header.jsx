import React from 'react'
import { useTheme } from "../hooks/useTheme"

export default function Header() {
const {theme, setTheme} = useTheme();

    return (
      <div className="flex w-[390px] px-4 pt-4 pb-0 flex-col items-center">
        <div className="flex justify-between pt-8  pl-0 pb-4 items-center self-stretch">
          <div className="flex flex-col">
            <h1 className="text-[#111] dark:text-[#FCFCFC] title-home">
              Seja bem-vinda,
            </h1>
            <h1 className="text-[#111] dark:text-[#FCFCFC] title-home">
              Deborah!
            </h1>
          </div>
          {theme === "light" ? (
            <div
              onClick={() => {
                setTheme("dark");
              }}
              className="flex px-3 py-2 items-center gap-2 rounded-lg border-purple default-shadow active:bg-[#901abb]"
            >
              <img src="/moon.svg" alt="" className="" />
            </div>
          ) : (
            <div
              onClick={() => {
                setTheme("light");
              }}
              className="flex px-3 py-2 items-center gap-2 rounded-lg border-purple default-shadow active:bg-[#901abb]"
            >
              <img src="/sun.svg" alt="" className="" />
            </div>
          )}
        </div>
        <p className="paragraph-home text-[#272727] dark:text-[#FCFCFC]">
          Se tudo ocorreu como planejado você ainda está vendo isso na data do
          seu aniversário, então parabéns, eu espero que goste.
        </p>
      </div>
    )
}

