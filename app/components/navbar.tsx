import { ImageApp } from "@/lib/appImages";
import Link from "next/link";

export default function Navbar (){
    return <div>
        <div className={"flex items-center w-screen justify-between md:px-6 px-4 bg-secondary h-[80px]"}>
            <div className={"flex items-center"}>
                <img src={ImageApp.logo} className={"h-[80px] w-[80px]"}/>
                <h1>Bitcome</h1>
            </div>
            <Link href={""}>Products</Link>
            <Link href={""}>About</Link>
            <Link href={""}>App</Link>
            <Link href={""}>FAQ</Link>
        </div>
    </div>
}