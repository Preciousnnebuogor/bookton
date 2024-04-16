import { ImageApp } from "@/lib/appImages"

import { ProductList } from "../data"

export default function Page({ params }: { params: { slug: string } }) {
  const product = ProductList.filter(
    (value, index) => index.toString() === params.slug
  ) [0]
  return (
    <div>
      <div className={"grid grid-cols-1 md:grid-cols-[50%_50%] gap-x-6 px-10"}>
        <div className={`bg-zinc-200 mb:mb-0 mb-4`}>
          <img src={product.image} />
        </div>
        <div>
          <div className={`w-[350px]`}>
            <h1 className={`text-xl mb-2 font-bold md:mt-6`}>
              {product.name}
            </h1>
            <p className={` text-xs mb-4`}>
              {product.desc}
            </p>
            
          </div>
          <p className={`text-2xl mb-10 font-bold`}>${product.price}</p>
          <div
            className={`flex items-center justify-center rounded-3xl 
                border-2 bg-zinc-200 p-4 font-bold`}
          >
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
