"use client"
import { MdOutlineShoppingCart } from "react-icons/md";
import { ImageApp } from "@/lib/appImages"

export default function Hero() {
  return (
    <div>
      <div className={`grid grid-cols-2 md:grid-cols-[60%_40%] px-8 gap-x-6`}>
        
        <div className={`rounded-3xl bg-slate-950 p-2 border-slate-950 border-2 `}>
          
            <div className={"flex  justify-between"}>
                <div>
            <p className={" text-5xl text-white mt-[50px]"}>Ebook learning skill completed</p>
            <p className={"text-sm text-white mt-2"}>more offer</p>
            <div className={"flex items-center justify-center"}>
            <button className={" rounded-3xl text-sm p-4 border-neutral-600 border-2 bg-secondary mt-10"}>
              Our services| <MdOutlineShoppingCart />
            </button>
            </div>
            </div>
          <img src={ImageApp.hero2} className={" md:mt-[200px]"} />
          </div>
        </div>

        <div className={``} >
            <img src={ImageApp.hero2} className={"h-[400px] w-full rounded-3xl bg-slate-600 border-slate-600 border-2 p-4 mb-2"}/>
          <img src={ImageApp.hero2} className={"h-[400px] w-full rounded-3xl bg-green-700 border-lime-700 border-2 p-4"} />
        </div>
      </div>
    </div>
  )
}
