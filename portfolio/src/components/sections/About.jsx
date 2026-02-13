import React from "react";
import {useState} from 'react'
import {Download, Zap ,Sparkles, Code2} from 'lucide-react'
import { TrendingUp } from "lucide-react"
import {SiReact , SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, SiBootstrap} from 'react-icons/si'
import {PERSONAL_INFO, ABOUT_STATS} from '../../utilis/constant'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'
// import {skills} from '../../data/skills'

const About = () => {

    const skills = [
        {name:'MongoDb', icon: SiMongodb, color:'#339933'},
        {name:'Express.js', icon: SiExpress, color:'#bf0b5c'},
        {name:'React.js', icon: SiReact, color:'#61DAFB'},
        {name:'Node.js', icon: SiNodedotjs, color:'#e8ba14'},
        {name:'Tailwind CSS', icon: SiTailwindcss, color:'#06B6D4'},
        {name:'Bootstrap', icon: SiBootstrap, color:'#563D7C'},
    ]

    return  <section className="relative py-20 bg-black overflow-hidden" id="about">
                <RadialGradientBackground variant="about" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Grid */} 
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left-Column Content */}
                        <div className="flex flex-col gap-12">
                            <div className="flex flex-col gap-8">
                                <FadeIn delay={60}>
                                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                                        <Code2 className="w-4 h-4 text-primary" />
                                        <span className="text-sm text-primary font-medium">
                                            B.Tech CSE Student | Full Stack Developer
                                        </span>
                                        <Sparkles className="w-4 h-4 text-primary" />
                                    </div>
                                </FadeIn>

                                <FadeIn delay={100} >
                                    <h2 className="text-2xl lg:text-4xl font-normal text-white leading-tight" >
                                        Passionate About Building Scalable and High-Performance Web Applications
                                    </h2>
                                </FadeIn>

                                <FadeIn delay={200} >
                                    <div className="flex flex-col gap-4">
                                        {PERSONAL_INFO.bio.map((paragraph, index) => (
                                            <p key={index} className="text-base text-white/70 leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </FadeIn>
                            </div>

                            <FadeIn delay={300} >
                                <div className="grid grid-cols-3 gap-8">
                                    {ABOUT_STATS.map((stat, index) => (
                                        <div className="relative" key={index}>
                                            <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                                            <div className="text-3xl font-normal text-primary mb-2 font-mono">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-white/60 leading-snug">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>

                            <FadeIn delay={400} >
                                <button 
                                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                                className="inline-flex items-center gap-3 bg-primary hover:bg-[#F5B041] text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group" >
                                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                                    Download Resume
                                </button>
                            </FadeIn>
                        </div>

                        {/* Right-Column Content */}
                        <FadeIn delay={200}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 relative group">
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity group"></div>
                                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-primary/10 rounded-xl">
                                                <Code2 className="w-6 h-6 text-primary"/>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-primary mb-2" >
                                                    Expertise
                                                </h3>
                                                <p className="text-white/70 text-sm leading-relaxed">
                                                    Focused on building scalable and responsive web applications using modern technologies like React, Node.js, and MongoDB while following clean coding practices.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                

                                <div className="relative group">
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                    <div className="relative flex bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 ">
                                    <div className="lg:flex items-start gap-4 ">
                                        <div className="p-3 bg-primary/10 w-fit mb-4 rounded-xl ">
                                            <Sparkles className="w-5 h-5 text-primary"/>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-base font-semibold text-primary mb-2">
                                                Clean Code
                                            </h3>
                                            <p className="text-sm text-white/70 leading-relaxed">
                                                Writing clean, maintainable, and well-structured code following best practices.
                                            </p>
                                        </div>
                                    </div>                                        
                                    </div>
                                </div>

                                <div className="relative group grid ">
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="lg:flex items-start gap-4 ">
                                        <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 ">
                                            <Zap className="w-5 h-5 text-primary"/>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-base font-semibold text-primary mb-2">
                                                Performance
                                            </h3>
                                            <p className="text-sm text-white/70 leading-relaxed">
                                                Optimizing applications for speed, scalability, and performance efficiency.
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                               

                                <div className="col-span-2 relative group">
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="flex items-start gap-4">   
                                        <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 ">
                                            <TrendingUp className="w-5 h-5 text-primary"/>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-primary mb-3">
                                                What I’m Currently Working On
                                            </h3>
                                            <ul className="text-sm text-white/70 space-y-2">
                                                <li>• Strengthening Data Structures & Algorithms</li>
                                                <li>• Building real-world MERN stack applications</li>
                                                <li>• Preparing for Software Development Internships</li>
                                            </ul>
                                        </div>
                                    </div> 
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                    
                    {/* Skills Grid Section */}
                    <FadeIn delay={500}>
                        <div className="flex flex-col items-center justify-center gap-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-normal text-white mb-2">  
                                    Tech Stack & Expertise
                                </h3>
                                <p className="text-sm text-white/60">
                                    Technologies I work with to build amazing projects
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl items-center justify-center">
                                {skills.map((skill, index) => (
                                    <div 
                                        key={index}
                                        className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                                    >
                                        <skill.icon className="text-3xl" style={{color: skill.color}} />
                                        <div className="text-sm text-white/80 font-medium text-center">
                                            {skill.name}
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
    
}

export default About