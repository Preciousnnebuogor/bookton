import { ImageApp } from "@/lib/appImages"

export default function Profile() {
  return (
    <div className={``}>
      <div className={"grid grid-cols-1 md:grid-cols-[50%_50%] gap-x-8 p-8"}>
        <div
          className={`md:flex md:items-center md:justify-center md:w-full md:h-full`}
        >
          <div
            className={`bg-[#03478a] rounded-md  px-6 border-[#03478a] 
          border-2 text-white h-[250px] md:w-[400px] w-full`}
          >
            <p
              className={`flex justify-end items-end text-2xl font-extrabold mb-4`}
            >
              Bookton
            </p>

            <img src={ImageApp.logo} className={`h-[80px] w-[120px] mb-0`} />
            <p className={`flex justify-center items-center text-2xl `}>
              123 {""} 4567 {""} 8952 {""} 7569
            </p>
            <div className={`flex justify-between items-center px-20 mt-4`}>
              <p>Expiry Date </p>
              <p>02/2026</p>
            </div>
          </div>
        </div>

        <div className={`px-6 mt-6`}>
          <p className={`text-2xl font-bold pb-4`}>Payment Details</p>
          <div>
            <p className={`text-xl font-semibold`}>Name on card</p>
            <input type="text" className={`border-b-2`} />
          </div>
          <div>
            <p className={`text-xl font-semibold mt-4`}>Number on card</p>
            <input type="number" className={`border-b-2`} />
          </div>
          <div className={`flex justify-between items-center mt-4`}>
            <div>
              <p className={`text-xl font-semibold `}>Valid Through</p>
              <input type="number" className={`border-b-2`} />
            </div>
          </div>
          <div className={`flex justify-center items-center`}>
            <button
              className={`rounded-md px-8 mt-8  text-white border-[#03478a] bg-[#03478a] 
            border-4 w-full h-[50px]`}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
