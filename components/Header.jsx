import React from 'react'
import { useTheme } from "../hooks/useTheme"

export default function Header(props) {
const {theme, setTheme} = useTheme();

    return (
      <div className="flex w-[390px] px-8 pt-4 pb-0 flex-col items-center">
        <div className="flex justify-between pt-8  pl-0 pb-4 items-center self-stretch">
          <div className="flex flex-col">
            <h1 className="text-[#111] dark:text-[#FCFCFC] title-home">
              {props.title}

            </h1>
            <h1 className="text-[#111] dark:text-[#FCFCFC] title-home">
            {props.title2}
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
          {props.description}

        </p>
      </div>
    )
}

