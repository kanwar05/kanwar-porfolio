import React, { useEffect, useState } from "react"
import { GraduationCap, Calendar } from "lucide-react"
import FadeIn from "../animations/FadeIn"

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology Computer Science",
    institution: "~I. K. Gujral Punjab Technical University, Mohali Campus-1, Punjab",
    duration: "2024 - present",
    description:
      "Focused on full-stack development, Data structures, and Software engineering principles.",
    grade: 8.0,
    suffix: " CGPA",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "~Meritorious Senior Secondary School, Sector-70, Mohali, Punjab",
    duration: "2022 - 2024",
    description:
      "Specialized in Science stream with Mathematics and Computer Science.",
    grade: 95,
    suffix: "%",
  },
]

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1500
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(start)
    }, 16)

    return () => clearInterval(timer)
  }, [end])

  return (
    <span>
      {end % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  )
}

const Education = () => {
  const [progressHeight, setProgressHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("education")
      if (!section) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const visible = Math.min(
        Math.max((windowHeight - rect.top) / rect.height, 0),
        1
      )

      setProgressHeight(visible * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="education" className="relative py-20 bg-black overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-wider uppercase">
                Education
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Academic Journey
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              My academic growth and technical foundation.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative ml-4">

          {/* Background Line */}
          <div className="absolute left-2 top-0 w-[2px] h-full bg-white/10" />

          {/* Animated Progress Line */}
          <div
            className="absolute left-2 top-0 w-[2px] bg-primary transition-all duration-300"
            style={{ height: `${progressHeight}%` }}
          />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <FadeIn key={item.id} delay={index * 100}>
                <div className="relative pl-10">

                  {/* Timeline Dot */}
                  <div className="absolute left-[0px] top-3 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50" />

                  <div className="group bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {item.degree}
                        </h3>
                        <p className="text-primary text-2xl font-medium">
                          {item.institution}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Calendar className="w-4 h-4" />
                        {item.duration}
                      </div>
                    </div>

                    <p className="text-white/70 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Animated Grade */}
                    <div className="text-3xl font-semibold text-primary">
                      <Counter end={item.grade} suffix={item.suffix} />
                    </div>

                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education
