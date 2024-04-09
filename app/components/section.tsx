import { ImageApp } from "@/lib/appImages"

export default function Section() {
  return (
    <div>
      <div className={"grid grid-cols-1 md:grid-cols-[40%_60%] px-8 gap-x-6 mt-8 "}>
        <div className={"flex flex-col justify-between"}>
          <div />
          <img src={ImageApp.section} className={"h-[200px] w-[200px] mb-4"} />
        </div>
        <div>
          <img src={ImageApp.section1} className={"h-[350px] w-fit"} />
        </div>
      </div>
      <div
        className={"grid grid-cols-1 md:grid-cols-[40%_60%] px-8 gap-x-6 mb-4"}
      >
        <div className={"mt-10"}>
          <h1 className={" font-medium text-3xl my-8"}>
            Don't just take our word for it.
          </h1>
          <h6 className={"text-sm mb-16"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iusto
            recusandae ea asperioresomnis quis pla.
          </h6>
          <div className={""}>
            
            <img src={ImageApp.section2} className={" h-[300px] w-[400px] mt-5 "} />
          </div>
        </div>
        <div className={" mt-20 w-[60%]"}>
          <h6 className={"text-sm mb-4"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iusto
            recusandae ea asperioresomnis quis placeat consectetur animi cum
            velit libero iure impedit architecto maxime obcaecati veritatis
          </h6>
          <h6 className={"text-sm mb-4"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iusto
            recusandae ea asperioresomnis quis placeat consectetur animi cum
            velit libero iure impedit architecto maxime obcaecati veritatis
          </h6>
          <h6 className={"text-sm mb-4"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iusto
            recusandae ea asperioresomnis quis placeat consectetur animi cum
            velit libero iure impedit architecto maxime obcaecati veritatis
          </h6>
          <h6 className={"text-sm mb-4"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iusto
            recusandae ea asperioresomnis quis placeat consectetur animi cum
            velit libero iure impedit architecto maxime obcaecati veritatis
          </h6>
          <h6 className={"text-sm mb-4"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iusto
            recusandae ea asperioresomnis quis placeat consectetur animi cum
            velit libero iure impedit architecto maxime obcaecati veritatis
          </h6>
        </div>
      </div>
    </div>
  )
}
