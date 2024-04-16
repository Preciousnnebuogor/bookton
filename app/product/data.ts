import { ImageApp } from "@/lib/appImages"
import { BookFile } from "@/lib/bookfile"
import Image from "next/image"

type IProduct = {
  image: string
  name: string
  price: number
  desc: string
  bookpath: string
}

export const ProductList: IProduct[] = [
  {
    image: ImageApp.prod1,
    name: "Tailwind css",
    price: 5,
    desc:"the book about tailw",
    bookpath: BookFile.c1,
  },
  {
    image: ImageApp.prod2,
    name: "Code Night.",
    price: 10,
    desc:`A PDF that enables you to learn why
     you should code at night,it lists the importants and briefly explains it in a way
     an individual can understand or comprehen. 
     Save it, so you don't forget. `,
    bookpath: BookFile.c2,
  },
  {
    image: ImageApp.prod3,
    name: "Coding Logic.",
    price: 15,
    desc:`Coding logic is a PDF that teaches how to improve coding logics,
    it explains the problems associated with coding and how to solve them. 
    This file is design in each a way each one can effectively comprehen.`,
    bookpath: BookFile.c3,
  },
  {
    image: ImageApp.prod9,
    name: "TypeScript Guide for JS.",
    price: 20,
    desc: `TypeScript Guide for JavaScript Programmers is a PDF document
     that enables programmers to learn how to work with TypeScript.
     This file contains the definition of TypeScript, the types of TypeScript and the functions of TypeScript.`,
    bookpath: BookFile.c9,
  },
  {
    image: ImageApp.prod4,
    name: "JS String Methods.",
    price: 25,
    desc:`JS stands for JavaScript, JavaScript String have different methods, through 
    this PDF you will get to know the different type of JavaScript string methods,
     how to use them, how they function and when to use them.`,
    bookpath: BookFile.c4,
  },
  {
    image: ImageApp.prod5,
    name: "JS Tricks for Cleaner Code.",
    price: 30,
    desc:"This PDF Document contains top JavaScript tricks for",
    bookpath: BookFile.c5,
  },
  {
    image: ImageApp.prod6,
    name: "",
    price: 35,
    desc:"",
    bookpath: BookFile.c6,
  },
  {
    image: ImageApp.prod7,
    name: "Tailwind css",
    price: 40,
    desc:"",
    bookpath: BookFile.c7,
  },
  {
    image: ImageApp.prod8,
    name: "Tailwind css",
    price: 45,
    desc:"",
    bookpath: BookFile.c8,
  },
]
