import { ImageApp } from "@/lib/appImages";

export default function ProductDetails(){
    return <div>
        <div className={"grid grid-cols-1 md:grid-cols-[50%_50%] gap-x-6 px-10"}>
            <div className={`bg-zinc-200 mb:mb-0 mb-4`}>
            <img src={ImageApp.hero1}/>
            </div>
            <div>

                <div>
                    <p>Template Image</p>
                </div>
                <p>price</p>
                <div><button>Buy me</button></div>

            </div>
        </div>
    </div>
}