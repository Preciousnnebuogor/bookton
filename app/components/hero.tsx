"use client"

import { ImageApp } from "@/lib/appImages"

export default function Hero() {
  return (
    <div className={"mt-[80px]"}>
      <div
        className={"grid grid-cols-1 md:grid-cols-[30%_70%] px-8 gap-x-6 mb-4"}
      >
        <div>
          <h1 className={" font-medium text-3xl my-8"}>
            YOUR HOME, YOUR PRIDE.
          </h1>
          <h6 className={"text-sm mb-4"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            dolorem architecto sequi aliquam vero perferendis quo{" "}
          </h6>
          <h6 className={"text-sm"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iusto
            recusandae ea asperioresomnis quis placeat consectetur animi cum
            velit libero iure impedit architecto maxime obcaecati veritatis
          </h6>
          <div className={"flex gap-2 md:justify-between items-center mt-4"}>
            <h1 className={" rounded-3xl p-2 border-neutral-600 border-2   "}>
              Our services
            </h1>
            <h1 className={" rounded-3xl p-2 border-neutral-600 border-2   "}>
              Kitchen
            </h1>
            <h1 className={" rounded-3xl p-2 border-neutral-600 border-2   "}>
              Sunroom
            </h1>
          </div>
        </div>

        <div className={" w-full"}>
          <img src={ImageApp.hero} className={"h-[400px] w-full mt-4"} />
        </div>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-[60%_40%] px-8 gap-x-6 mb-4 "}>
        <div>
          <img src={ImageApp.hero1} className={"h-[400px] w-full"} />
        </div>
        <div className={"flex flex-col justify-between"}>
            <div/>
          <img src={ImageApp.hero2} className={"h-[200px] w-[200px] mt-4"} />
        </div>
      </div>

      <div className={"grid grid-cols-1 md:grid-cols-[40%_60%] px-8 gap-x-6 mb-4 "}>
        <div className={"flex flex-col justify-between"}>
            <div/>
          <img src={ImageApp.hero3} className={"h-[200px] w-[200px]"} />
        </div>
        <div>
          <img src={ImageApp.hero4} className={"h-[400px] w-full mt-4"} />
        </div>
      </div>
    </div>
  )
}
