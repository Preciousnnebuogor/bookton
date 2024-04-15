import { ImageApp } from "@/lib/appImages"

import { ProductList } from "./data"

export default function ProductPage() {
  return (
    <>
      <div className={" items-center flex justify-center"}>
        <div
          className={"grid grid-cols-1 md:grid-cols-3 md:p-4 p-2 md:gap-x-4 w-[90%] md:w-[70%]"}
        >
          {ProductList.map((value, index) => (
            <div
              className={`flex flex-col items-center justify-between 
          rounded-3xl mt-4 bg-zinc-200 h-[250px] 
           border-zinc-200`}
            >
              <img src={value.image} className={"h-[200px] w-[200px]"} />
              <p>{value.name}</p>
              <p> ${value.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
