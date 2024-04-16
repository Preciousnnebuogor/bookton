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
    desc:"the book about tailwind",
    bookpath: BookFile.c1,
  },
  {
    image: ImageApp.prod2,
    name: "Tailwind css",
    price: 10,
    desc:"",
    bookpath: BookFile.c2,
  },
  {
    image: ImageApp.prod3,
    name: "Tailwind css",
    price: 15,
    desc:"",
    bookpath: BookFile.c3,
  },
  {
    image: ImageApp.prod9,
    name: "Tailwind css",
    price: 20,
    desc:"",
    bookpath: BookFile.c9,
  },
  {
    image: ImageApp.prod4,
    name: "Tailwind css",
    price: 25,
    desc:"",
    bookpath: BookFile.c4,
  },
  {
    image: ImageApp.prod5,
    name: "Tailwind css",
    price: 30,
    desc:"",
    bookpath: BookFile.c5,
  },
  {
    image: ImageApp.prod6,
    name: "Tailwind css",
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
