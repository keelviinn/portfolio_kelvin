import { NextComponentType } from "next"

export const Introduction: NextComponentType = () => {
  return (
    <section
      aria-labelledby="introduction-title"
      className="py-40 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <p>Hi, I'm</p>
      </div>
    </section>
  )
}