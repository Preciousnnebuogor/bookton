import Image from "next/image"

import { ImageApp } from "@/lib/appImages"
import { BookFile } from "@/lib/bookfile"

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
    name: "SSL Works PDF.",
    price: 5,
    desc: `This document explains how SSL works, using graphical images and designs to explain. 
    It explains the meaning in programming language, and also explains how SSL protocol works with detailed 
    examples.`,
    bookpath: BookFile.c1,
  },
  {
    image: ImageApp.prod2,
    name: "Code Night PDF.",
    price: 10,
    desc: `A PDF that enables you to learn why
     you should code at night,it lists the importants and briefly explains it in a way
     an individual can understand or comprehen. 
     Save it, so you don't forget. `,
    bookpath: BookFile.c2,
  },
  {
    image: ImageApp.prod3,
    name: "Coding Logic PDF.",
    price: 15,
    desc: `Coding logic is a PDF that teaches how to improve coding logics,
    it explains the problems associated with coding and how to solve them. 
    This file is design in such a way everyone can effectively comprehen.`,
    bookpath: BookFile.c3,
  },
  {
    image: ImageApp.prod9,
    name: "TypeScript Guide for JS PDF.",
    price: 20,
    desc: `TypeScript Guide for JavaScript Programmers is a PDF document
     that enables programmers to learn how to work with TypeScript.
     This file contains the definition of TypeScript, the types of TypeScript and the functions of TypeScript.`,
    bookpath: BookFile.c9,
  },
  {
    image: ImageApp.prod4,
    name: "JS String Methods PDF.",
    price: 25,
    desc: `JS stands for JavaScript, JavaScript String have different methods, through 
    this PDF you will get to know the different type of JavaScript string methods,
     how to use them, how they function and when to use them.`,
    bookpath: BookFile.c4,
  },
  {
    image: ImageApp.prod5,
    name: "JS Tricks for Cleaner Code PDF.",
    price: 30,
    desc: `This PDF Document contains top JavaScript tricks for cleaner code.
    Each of the trick list is explained with practical examples.`,
    bookpath: BookFile.c5,
  },
  {
    image: ImageApp.prod6,
    name: "React Hooks PDF.",
    price: 35,
    desc: `In this PDF document, you are going to understand what React hooks are,
     the basic React Hooks that are available and how to effectively implement them.
      This is one step close to Success.`,
    bookpath: BookFile.c6,
  },
  {
    image: ImageApp.prod7,
    name: "Async Await PDF.",
    price: 40,
    desc: `JavaScript is everywhere. Millions of webpages are built on JS.
     A few examples will heip you understand the JavaScript Asyn Await keywords in this
      PDF document.`,
    bookpath: BookFile.c7,
  },
  {
    image: ImageApp.prod8,
    name: "Web Application PDF.",
    price: 45,
    desc: `It is critical to create a maintainable folder structure while developing web apps, 
    having the right files in the correct folders helps organize your code and make other developer 
    have an idea of how the architecture of your web application is or will be during development.`,
    bookpath: BookFile.c8,
  },
]
