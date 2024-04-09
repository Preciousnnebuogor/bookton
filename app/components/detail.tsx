import { ImageApp } from "@/lib/appImages"

export default function Detail() {
  return (
    <div>
      <div
        className={
          " grid grid-cols-1 md:grid-cols-[50%_50%] px-8 gap-x-6 md:my-8 my-4"
        }
      >
        <div>
          <img src={ImageApp.detail} className={"h-[400px] w-full"} />
          <div className={"w-[40%]"}>
            <h1 className={" font-medium text-2xl my-4"}>Kitchen</h1>
            <h6 className={"text-sm "}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              consectetur adipisicing elit
            </h6>
            <button
              className={
                " rounded-3xl p-2 border-neutral-600 border-2 text-xs mt-4"
              }
            >
              View your Kitchen
            </button>
          </div>
        </div>
        <div>
          <img src={ImageApp.detail1} className={"h-[400px] w-full mt-4"} />
          <div className={"w-[40%]"}>
            <h1 className={" font-medium text-2xl my-4"}>Sunroom</h1>
            <h6 className={"text-sm "}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              consectetur adipisicing elit
            </h6>
            <button
              className={
                " rounded-3xl p-2 border-neutral-600 border-2 text-xs mt-4"
              }
            >
              View your Sunroom
            </button>
          </div>
        </div>
      </div>

      <div className={"grid grid-cols-[60%_40%] px-8 gap-x-6 mb-4 "}>
        <div className={"md:w-[50%] w-[80%]"}>
          <h1 className={" font-medium text-2xl my-4"}>
            You don't even have to lift a finger.*
          </h1>
          <h6 className={"text-sm "}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iusto
            recusandae ea asperioresomnis quis placeat consectetur animi cum
            velit libero iure impedit architecto maxime obcaecati veritatis
          </h6>
          <button
            className={
              " rounded-3xl p-2 border-neutral-600 border-2 text-xs mt-4"
            }
          >
            View an In-Depth Timeline
          </button>
        </div>
        <div>
          <img src={ImageApp.detail2} className={"h-[200px] w-[200px] mt-8"} />
        </div>
      </div>
      <div
        className={
          "md:flex md:items-center md:justify-between grid grid-cols-2 px-8 gap-x-6 mb-6 my-8"
        }
      >
        <div className={"flex  flex-col items-center justify-between"}>
          <h1 className={" font-medium md:text-xl my-4 text-xl "}>
            Consultation
          </h1>
          <h6 className={"text-xs mb-2"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. velit
            laboriosam voluptate consequuntur pariatur vitae dignissimos.
          </h6>
        </div>

        <div className={"flex  flex-col items-center justify-center"}>
          <h1 className={"font-medium md:text-xl my-4 text-xl"}>
            Consultation
          </h1>
          <h6 className={"text-xs mb-2"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. velit
            laboriosam voluptate consequuntur pariatur vitae dignissimos.
          </h6>
        </div>

        <div className={"flex  flex-col items-center justify-center"}>
          <h1 className={"font-medium md:text-xl my-4 text-xl"}>
            Consultation
          </h1>
          <h6 className={"text-xs mb-2"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. velit
            laboriosam voluptate consequuntur pariatur vitae dignissimos.
          </h6>
        </div>

        <div className={"flex  flex-col items-center justify-center"}>
          <h1 className={"font-medium md:text-xl my-4 text-xl"}>
            Consultation
          </h1>
          <h6 className={"text-xs mb-2"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. velit
            laboriosam voluptate consequuntur pariatur vitae dignissimos.
          </h6>
        </div>

        <div className={"flex  flex-col items-center justify-center"}>
          <h1 className={"font-medium md:text-xl my-4 text-xl"}>
            Consultation
          </h1>
          <h6 className={"text-xs mb-2"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. velit
            laboriosam voluptate consequuntur pariatur vitae dignissimos.
          </h6>
        </div>
      </div>
    </div>
  )
}
