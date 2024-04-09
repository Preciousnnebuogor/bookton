"use client"

import { ImageApp } from "@/lib/appImages"

export default function About() {
  return (
    <div>
      <div className={"grid grid-cols-1 md:grid-cols-[40%_60%] px-8 gap-x-6 md:my-8 my-4"}>
        <div>
          <div className={" font-medium md:text-2xl my-4 text-xl"}>
            <h1>Home Design </h1>
            <h1>You Can Trust Decor.</h1>
          </div>
          <div className={"md:w-[80%] w-[100%]"}>
            <h6 className={"text-xs mb-2 md:mb-4"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. velit
              laboriosam voluptate consequuntur pariatur vitae dignissimos
              quidem at, harum iste, officia nihil optio consequatur dol.
            </h6>
            <h6 className={"text-xs"}>
              I voice can go a long way to go anywhere
            </h6>
          </div>
        </div>
        <div>
          <img src={ImageApp.about} className={"h-[200px] mt-4"} />
        </div>
      </div>

      <div
        className={
          "md:flex md:justify-between md:mt-8 md:items-center md:px-10 grid grid-cols-2 px-8 gap-x-6 mb-6 my-8 "
        }
      >
        <div>
          <div className={"flex items-center justify-center"}>
            <h4 className={"text-center text-sm "}>10+</h4>
          </div>
          <div className={"flex items-center justify-center"}>
          <h6 className={"text-xs mb-4 "}>years in operation</h6>
          </div>
        </div>

        <div className={"flex  flex-col items-center justify-center"}>
          <h4 className={" md:text-center text-sm items-center"}>30+</h4>
          <h6 className={"text-xs mb-4"}>years of experience</h6>
        </div>

        <div className={"flex  flex-col items-center justify-center"}>
          <h4 className={" md:text-center text-sm items-center"}>27</h4>
          <h6 className={"text-xs mb-4"}>Kitchens fitted in 2023</h6>
        </div>
        <div className={"flex  flex-col items-center justify-center"}>
          <h4 className={" md:text-center text-sm items-center"}>27</h4>
          <h6 className={"text-xs mb-4"}>Sunroom built in 2023</h6>
        </div>
        <div className={"flex  flex-col items-center justify-center"}>
          <h4 className={" md:text-center text-sm items-center"}>8</h4>
          <h6 className={"text-xs mb-4"}>The size of our team</h6>
        </div>
      </div>
      <div className={"grid grid-cols-1 md:grid-cols-[40%_60%] px-8 gap-x-6 mb-4 my-8"}>
        <div>
          <h1 className={"font-medium md:text-2xl my-4 text-xl"}>
            Our Kitchen Packages
          </h1>
        </div>
        <div className={"md:w-[50%] w-[80%]"}>
          <h6 className={"text-xs mb-2 md:mb-4"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. velit
            laboriosam voluptate consequuntur pariatur vitae dignissimos quidem
            at, harum iste, officia nihil optio consequatur dol.
          </h6>

          <h6 className={"text-xs mb-2 md:mb-4"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. velit
            laboriosam voluptate consequuntur pariatur vitae dignissimos quidem
            at, harum iste, officia nihil optio consequatur dol.
          </h6>

          <h6 className={"text-xs mb-2 md:mb-4"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. velit
            laboriosam voluptate consequuntur pariatur vitae dignissimos quidem
            at, harum iste, officia nihil optio consequatur dol.
          </h6>
          <div>
          <button className={" rounded-3xl p-2 border-neutral-600 border-2 text-xs"}>
            View our kitchen packages
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
