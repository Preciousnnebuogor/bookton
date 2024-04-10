"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/comps"
import { motion } from "framer-motion"
import { IoIosMenu, IoMdClose } from "react-icons/io"

import { ImageApp } from "@/lib/appImages"

export default function Navbar() {
  const [showNav, setShowNar] = useState(false)
  return (
    <div>
      {showNav && <MobleNavbar />}
      <div
        className={
          "flex items-center w-screen justify-between md:px-6 px-4 bg-secondary h-[80px]"
        }
      >
        <div className={" flex justify-between items-center w-full md:w-0"}>
          <div className={"flex items-center"}>
            <img src={ImageApp.logo} className={"h-[80px] w-[80px]"} />
            <h1>Bitcome</h1>
          </div>
          <span className={"text-3xl cursor-pointer mx-2 md:hidden block"}>
            {showNav ? (
              <IoMdClose
                onClick={() => {
                  setShowNar(false)
                }}
              />
            ) : (
              <IoIosMenu
                onClick={() => {
                  setShowNar(true)
                }}
              />
            )}
          </span>
        </div>
        <div className=" flex  justify-between ">
          <div
            className={`md:flex md:justify-between md:gap-x-8 md:px-5 hidden
               md:pl-[30rem] items-center`}
          >
            <Link href={""}>Products</Link>
            <Link href={""}>About</Link>
            <Link href={""}>App</Link>
            <Link href={""}>FAQ</Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

function MobleNavbar() {
  return (
    <motion.div
      className={` bg-secondary text-stone-950 md:justify-center  
        text-2xl z-[5] md:z-auto md:static 
        fixed flex flex-col 
        w-[50vw] left-0 md:w-auto 
        md:hidden mt-[80px] h-screen 
      
           
        `}
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <Link
        href={""}
        className={"mx-3 my-2 text-sm pt-10 text-secondary-foreground"}
      >
        Kitchen
      </Link>
      <Link
        href={""}
        className={"mx-3 my-2 text-sm text-secondary-foreground "}
      >
        Products
      </Link>
      <Link href={""} className={"mx-3 my-2 text-sm text-secondary-foreground"}>
        About
      </Link>
      <Link href={""} className={"mx-3 my-2 text-sm text-secondary-foreground"}>
        App
      </Link>

      <Link href={""} className={`mx-3 my-2 text-sm text-secondary-foreground`}>
        FAQ
      </Link>
    </motion.div>
  )
}
