import { ImageApp } from "@/lib/appImages";

export default function ProductDetails(){
    return <div>
        <div className={"grid grid-cols-1 md:grid-cols-[50%_50%] gap-x-6 px-10"}>
            <div className={`bg-zinc-200 mb:mb-0 mb-4`}>
            <img src={ImageApp.hero1}/>
            </div>
            <div>

                <div className={`w-[350px]`}>
                    <h1 className={`text-xl mb-2 font-bold md:mt-6`}>Template Image</h1>
                    <p className={` text-xs mb-4`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit come. 
                        Voluptatibus amet et nesciunt suscipit ratione, eum beatae 
                        praesentium aspernatur impedit fugiat illo unde corrupti nneuyd.</p>
                </div>
                <p className={`text-2xl mb-10 font-bold`}>$5</p>
                <div className={`flex items-center justify-center rounded-3xl 
                border-2 bg-zinc-200 p-4 font-bold`}><button>Buy Now</button></div>

            </div>
        </div>
    </div>
}