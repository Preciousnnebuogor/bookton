
import React from "react"
import Hero from "./hero"
import About from "./about"
import Section from "./section"
import Detail from "./detail"


export default function HomePage() {

  return (
    <div className={"bg-secondary"}>
      <Hero/>
      <About/>
      <Section/>
      <Detail/>
    </div>

  )
}
