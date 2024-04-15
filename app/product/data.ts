import { ImageApp } from "@/lib/appImages"
import Image from "next/image"

type IProduct = {
  image: string
  name: string
  price: number
  desc: string
}

export const ProductList: IProduct[] = [
  {
    image: ImageApp.prod1,
    name: "Tailwind css",
    price: 5,
    desc:"",
  },
  {
    image: ImageApp.prod2,
    name: "Tailwind css",
    price: 10,
    desc:"",
  },
  {
    image: ImageApp.prod3,
    name: "Tailwind css",
    price: 15,
    desc:"",
  },
  {
    image: ImageApp.prod9,
    name: "Tailwind css",
    price: 20,
    desc:"",
  },
  {
    image: ImageApp.prod4,
    name: "Tailwind css",
    price: 25,
    desc:"",
  },
  {
    image: ImageApp.prod5,
    name: "Tailwind css",
    price: 30,
    desc:"",
  },
  {
    image: ImageApp.prod6,
    name: "Tailwind css",
    price: 35,
    desc:"",
  },
  {
    image: ImageApp.prod7,
    name: "Tailwind css",
    price: 40,
    desc:"",
  },
  {
    image: ImageApp.prod8,
    name: "Tailwind css",
    price: 45,
    desc:"",
  },
]
