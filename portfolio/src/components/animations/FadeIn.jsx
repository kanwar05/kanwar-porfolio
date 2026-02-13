import React, {useState, useEffect, useRef } from 'react'

const FadeIn = ({children, delay=0, duration=500, threshold=0.1}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observe = new IntersectionObserver(
            ([entry]) => {
                //Triger animation when element enters viewport
                if(entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                } 
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px' //Trigers slightly before element is fully visible
            }
        );

        if(elementRef.current) {
            observe.observe(elementRef.current)
        }

        return () => {
            if(elementRef.current) {
                observe.unobserve(elementRef.current);
            }
        };
    }, [threshold, isVisible]
);

    return(
        <div
            ref={elementRef}
            className={isVisible ? 'animate-fadeIn' : 'opacity-0'}
            style={{
                animationDelay: isVisible ? `${delay}ms` : '0ms',
                animationDuration: `${duration}ms`,
                animationFillMode: 'both'
            }}
        >
            {children}
        </div>
    )
}

export default FadeIn;