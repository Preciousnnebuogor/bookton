import { ProductList } from "./data"
import { ImageApp } from "@/lib/appImages"

export default function ProductPage() {
  return (
    <>
    <div className={"bg-secondary"}>
      <div className={"grid grid-cols-1 md:grid-cols-3 p-4"}>
        {ProductList.map((value,index) => (
          <div className={`flex flex-col items-center justify-between 
          rounded-3xl mt-4 bg-zinc-200 h-[250px] w-[250px]
           border-zinc-200`}>
            <img src={value.image} className={"h-[200px] w-[200px]"} />
            <p>{value.name }</p>
            <p>{value.price}</p>
          </div>
          
        ))}
      </div>
    </div>
    </>
  )
}
