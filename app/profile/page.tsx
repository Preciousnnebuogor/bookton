import { ImageApp } from "@/lib/appImages";

export default function Profile() {
  return (
    <div>
      <div className={"grid grid-cols-1 md:grid-cols-[50%_50%] gap-x-6 p-8"}>
        <div
          className={`bg-[#03478a] rounded-md  p-2 border-[#03478a] 
          border-2 text-white h-[250px] w-[400px]`}
        >
          <p className={`flex justify-end items-end text-2xl font-extrabold mb-4`}>GiftHome</p>
         
            <img src={ImageApp.logo} className={`h-[80px] w-[120px] p-8 mb-0`} />
            <p className={`flex justify-center items-center text-2xl `}>123 {""} 4567 {""} 8952 {""} 7569</p>
            <div className={`flex justify-between items-center px-20 mt-4`}>
            <p>Expiry Date </p>
            <p>02/2026</p>
            </div>
        </div>
      </div>
    </div>
  ) 
}
