"use client"

import { MdOutlineShoppingCart } from "react-icons/md"

import { ImageApp } from "@/lib/appImages"

export default function Hero() {
  return (
    <div className={"h-[calc(100vh-60px)]"}>
      <div className={`grid grid-cols-2 md:grid-cols-[60%_40%] px-8 gap-x-6`}>
        <div
          className={`rounded-3xl bg-zinc-400 p-2 border-zinc-400 border-2 relative `}
        >
          <div className={"flex  justify-between"}>
            <div className={""}>
              <p className={" text-5xl text-white mt-[50px] w-5"}>
                Ebook learning skill completed
              </p>
              <p className={"text-sm text-white mt-2"}>more offer</p>
              <div
                className={`flex items-center justify-center w-fit h-fit
               bg-white rounded-3xl p-4 border-white
                border-2 bg-secondary mt-10`}
              >
                <p className={"text-sm pr-2  "}>Our services|</p>
                <MdOutlineShoppingCart className={"  bg-white "} />
              </div>
            </div>
            <img
              src={ImageApp.hero2}
              className={" h-[400px] w-[400px] absolute right-4 bottom-0"}
            />
          </div>
        </div>

        <div className={`h-full flex flex-col justify-between`}>
          <div
            className={`rounded-3xl bg-zinc-200 border-zinc-200 border-2 p-4 mb-4 flex justify-between items-center gap-6`}
          >
            <p className={"text-3xl h-[150px] "}>See our gift cards</p>
            <img src={ImageApp.hero3} className={"h-[200px] w-[200px]  "} />
          </div>
          <div
            className={`rounded-3xl  border-2 p-4  bg-zinc-400 border-zinc-400 `}
          >
            <div className={"flex items-center justify-center"}>
            <p className={"text-sm h-[150px] "}>Here are some samples you can trust us with</p>
            <img src={ImageApp.hero1} className={"h-[200px] w-full"} />
            </div>
            <p className={"text-2xl h-5"}>Contact us</p>
          </div>
        </div>
      </div>
    </div>
  )
}
