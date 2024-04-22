"use client"

import { MdOutlineShoppingCart } from "react-icons/md"

import { ImageApp } from "@/lib/appImages"
import Link from "next/link"

export default function Hero() {
  return (
    <div className={"h-[calc(100vh-60px)]"}>
      <div className={`grid grid-cols-1 md:grid-cols-[60%_40%] px-8 gap-x-6`}>
        <div
          className={`rounded-3xl bg-secondary p-2 border-secondary border-2 relative `}
        >
          <div className={"flex  justify-between"}>
            <div className={""}>
              <p className={" md:text-4xl text-2xl  mt-[50px] w-[50%]"}>
                {"Buy an Ebook and get 10% discount"}
              </p>
              <p className={"text-sm  mt-2"}>more offers with us.</p>
              <div
                className={`flex items-center justify-center w-fit h-fit
               bg-card rounded-3xl p-4 border-card text-card-foreground
                border-2  mt-10`}
              >
               <Link href={"/product"}> <p className={" text-sm pr-2  "}>{"Our Books|"}</p></Link>
                <MdOutlineShoppingCart className={"  bg-card text-card-foreground "} />
              </div>
            </div>
            <img
              src={ImageApp.hero2}
              className={" h-[200px] w-[200px] md:h-[400px] md:w-[400px] absolute right-4 bottom-0"}
            />
          </div>
        </div>

        <div className={`h-full flex flex-col justify-between md:mt-0 mt-10`}>
          <div
            className={`rounded-3xl bg-primary border-primary border-2 p-4 mb-4 flex justify-between items-center gap-6`}
          >
            <p className={"md:text=3xl text-2xl h-[150px] "}>{"Earn a gift card for every purchase."}</p>
            <img src={ImageApp.hero3} className={"h-[200px] w-[200px]  "} />
          </div>
          <div
            className={`rounded-3xl  border-2 p-4  bg-secondary border-secondary `}
          >
            <div className={"flex items-center justify-center md:pl-0 pl-8 "}>
            <p className={"text-sm h-[150px] "}>{"Every book must be chewed to get it's juice."}</p>
            <img src={ImageApp.hero1} className={"h-[200px] w-full"} />
            </div>
            <p className={"text-2xl h-5"}>{"Contact us"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
 