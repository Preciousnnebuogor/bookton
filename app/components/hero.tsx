"use client"

import { MdOutlineShoppingCart } from "react-icons/md"

import { ImageApp } from "@/lib/appImages"

export default function Hero() {
  return (
    <div className={"h-[calc(100vh-60px)]"}>
      <div className={`grid grid-cols-2 md:grid-cols-[60%_40%] px-8 gap-x-6`}>
        <div
          className={`rounded-3xl bg-slate-950 p-2 border-slate-950 border-2 relative `}
        >
          <div className={"flex  justify-between"}>
            <div>
              <p className={" text-5xl text-white mt-[50px]"}>
                Ebook learning skill completed
              </p>
              <p className={"text-sm text-white mt-2"}>more offer</p>
              <div
                className={`flex items-center justify-center w-fit h-fit
               bg-white rounded-3xl p-4 border-neutral-600
                border-2 bg-secondary mt-10`}
              >
                <p className={"text-sm pr-2  "}>Our services|</p>
                <MdOutlineShoppingCart className={"  bg-white "} />
              </div>
            </div>
            <img
              src={ImageApp.hero2}
              className={" h-[300px] w-[300px] absolute right-4 bottom-0"}
            />
          </div>
        </div>

        <div className={`h-full bg-red-500 flex flex-col justify-between`}>
          <div
            className={`rounded-3xl bg-slate-600 border-slate-600 border-2 p-4 mb-4`}
          >
            <p>come here</p>
            <img src={ImageApp.hero2} className={"h-[200px] w-full "} />
          </div>
          <div
            className={`rounded-3xl bg-lime-300 border-lime-300 border-2 p-4 `}
          >
            <img src={ImageApp.hero2} className={"h-[200px] w-full"} />
            <p>Contact us</p>
          </div>
        </div>
      </div>
    </div>
  )
}
