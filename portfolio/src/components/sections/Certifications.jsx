import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react'
import { certifications } from '../../data/certifications'
import FadeIn from '../animations/FadeIn'

const Certifications = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollContainerRef = useRef(null)

    const scrollToIndex = (index) => {
        setCurrentIndex(index)
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.offsetWidth
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            })
        }
    }

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % certifications.length
        scrollToIndex(newIndex)
    }

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + certifications.length) % certifications.length
        scrollToIndex(newIndex)
    }

    // ✅ AUTO SLIDE
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const next = (prev + 1) % certifications.length
                if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.offsetWidth
                    scrollContainerRef.current.scrollTo({
                        left: next * cardWidth,
                        behavior: 'smooth'
                    })
                }
                return next
            })
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section id='certifications' className='relative py-20 bg-black overflow-hidden'>
            <div className="absolute inset-0 overflow-hidden">
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-90 rounded-full blur-3xl' />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <FadeIn delay={0}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                            <Award className='w-4 h-4 text-primary' />
                            <span className='text-sm text-primary font-medium tracking-wider uppercase'>
                                Certifications
                            </span>
                        </div>

                        <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4 max-w-xl mx-auto'>
                            Continuous Learning & Professional Growth
                        </h2>

                        <p className='text-lg text-white/60 max-w-xl mx-auto'>
                            Certifications and courses that strengthen my technical expertise.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={100}>
                    <div className="relative">
                        <div
                            ref={scrollContainerRef}
                            className="overflow-x-hidden scroll-smooth"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            <div className="flex">
                                {certifications.map((cert, index) => (
                                    <div
                                        key={cert.id}
                                        className="w-full shrink-0 px-4"
                                        style={{ scrollSnapAlign: 'start' }}
                                    >
                                        <div className="lg:max-w-[600px] md:max-w-[600px] sm:max-w-[200px] mx-auto">
                                            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500">

                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    className="max-full max-h-[500px] object-cover border-b border-white/10 "
                                                />

                                                <div className="p-8 bg-primary/5">
                                                    <h3 className="text-2xl font-semibold text-white mb-2">
                                                        {cert.title}
                                                    </h3>

                                                    <p className="text-white/60 mb-4">
                                                        {cert.issuer} • {cert.year}
                                                    </p>

                                                    <a
                                                        href={cert.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-primary hover:underline"
                                                    >
                                                        View Credential
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="flex items-center justify-center gap-2 mt-10">
                            {certifications.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToIndex(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === currentIndex
                                            ? 'bg-primary w-8 h-2'
                                            : 'bg-white/30 w-2 h-2 hover:bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <button
                            onClick={prevSlide}
                            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
                        >
                            <ChevronLeft className='w-6 h-6 text-white' />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
                        >
                            <ChevronRight className='w-6 h-6 text-white' />
                        </button>

                    </div>
                </FadeIn>
            </div>
        </section>
    )
}

export default Certifications
