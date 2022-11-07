import { NextComponentType } from "next"

export const Hero: NextComponentType = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="py-40 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <p>Hi, I&apos;m</p>
      </div>
    </section>
  )
}