import React from "react";
import {useState} from 'react'
import {ChevronDown, Star} from 'lucide-react'
import {SiReact , SiTailwindcss, SiNodedotjs, SiMongodb} from 'react-icons/si'
import {scrollToSection} from '../../hooks/useScrollSpy'
import {PERSONAL_INFO, STATS} from '../../utilis/constant'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'
import { Typewriter } from 'react-simple-typewriter'

// import kanwar from '../../assets/kanwar.png'


function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackground varient="hero" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column Content */}
          <div className="text-left">

            <FadeIn delay={0}>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-6 leading-tight">
                Hi, I'm Kanwar<br />
                <span className="text-primary text-3xl md:text-4xl lg:text-5xl gap-1">
                  <Typewriter
                    words={[
                      'Full Stack Developer',
                      'MERN Stack Developer',
                      'DSA Enthusiast',
                      'Aspiring Software Engineer'
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full ">
              <Star className="w-4 h-4 text-white fill-white" />
              <span className="text-xs md:text-sm text-white tracking-[1.2px]" >
                2nd Year CSE Student | IKGPTU | CGPA: 8.0
              </span>
            </div>
            </FadeIn>

            <FadeIn delay={200} >
              <p className="text-lg text-white/70 max-w-[550px] mb-8">
                I'm 2nd-year B.Tech CSE student at IKGPTU (CGPA: 8.0) with hands-on 
                experience building scalable MERN stack applications and strong 
                foundations in Data Structures & Algorithms. 
                Actively seeking software development internship opportunities.
              </p>
            </FadeIn>

            <FadeIn delay={300} >
              {/* <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-0 mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white hover:bg-primary/20 hover:text-white trnasition-all duration-300">
                  Get In Touch
                </div>
              </button> */}

              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-primary text-black rounded-xl px-6 py-3 font-semibold hover:bg-[#F5B041] hover:scale-105 transition-all duration-300"
                >
                  View Projects
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-primary text-primary rounded-xl px-6 py-3 hover:bg-primary hover:text-black hover:scale-105 transition-all duration-300 font-semibold"
                >
                  Contact Me
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  <div className="text-left border-r border-white/50 pr-10 last:border-r-0" key={index}>
                    <div className="text-xl font-normal text-primary mb-[8px] font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column Image-Content */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[400px] ml-auto group">
                <div className="absolute rounded-2xl overflow-hidden inset-0 ">
                  <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                </div>

                {/* Image-Container */}
                <div className="relative rounded-2xl overflow-hidden m-[2px] h-[calc(100%-2px)] ">
                  <img 
                    src='/kanwar.jpeg' 
                    alt="Kanwar Sain - Full Stack Developer"
                    className="w-full h-full object-cover"
                  ></img>
                </div>

                {/* Technologies Logos */}
                <div className="absolute left-6 bottom-6 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                      <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiReact className="w-full h-full text-primary" />
                      </div>

                      <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiMongodb className="w-full h-full text-primary" />
                      </div>

                      <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiNodedotjs className="w-full h-full text-primary" />
                      </div>

                      <div className="w-6 h-6 items-center justify-center hover:scale-110 transition-transform duration-300">
                        <SiTailwindcss className="w-full h-full text-primary" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator*/}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  )
}

export default Hero;