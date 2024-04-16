import Link from "next/link"

import { ImageApp } from "@/lib/appImages"

import { ProductList } from "./data"

export default function ProductPage() {
  return (
    <>
      <div className={" items-center flex justify-center"}>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-3 md:p-4 p-2 md:gap-x-4 w-[90%] md:w-[70%]"
          }
        >
          {ProductList.map((value, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between 
          rounded-3xl mt-4 bg-primary  
           border-primary`}
            >
              <Link href={`/product/${index}`}>
                <img src={value.image} className={"h-[300px] w-full"} />
              </Link>
              <p>{value.name}</p>
              <p> ${value.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
