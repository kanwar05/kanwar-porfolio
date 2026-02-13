import React from 'react'

const RadialGradientBackground = ({variant='hero', gradients=[]}) => {

    const variants = {
        hero: [
            {
                position: 'top-1 left-1 -translate-x-1/2 -translate-y-1/2',
                size: 'w-[1400px] h-[1400px]',
                colors: [
                    {color: 'rgba(243, 156, 18, 0.15)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.25)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.3)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.25)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.15)', stop:'100%'},
                ],
                blur: '0',
                opacity: 0.6
            },
            {
                position: 'top-1 left-1',
                size: 'w-[1400px] h-[1400px]',
                colors: [
                    {color: 'rgba(243, 156, 18, 0.15)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.25)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.3)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.25)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.15)', stop:'100%'},
                ],
                blur: '0',
                opacity: 0.6
            },
            {
                position: 'right-1 bottom-1',
                size: 'w-[1400px] h-[1400px]',
                colors: [
                    {color: 'rgba(243, 156, 18, 0.15)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.25)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.3)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.25)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.15)', stop:'100%'},
                ],
                blur: '0',
                opacity: 0.6
            },
        ],

        about: [
            {
                position: 'bottom-0 left-[75%]',
                size: 'w-[700px] h-[700px]',
                colors: [
                    {color: 'rgba(243, 156, 18, 0.15)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.25)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.3)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.25)', stop:'100%'},
                    {color: 'rgba(243, 156, 18, 0.15)', stop:'100%'},
                ],
                blur: '0',
                opacity: 0.6
            }
        ]
    }

    const activeGradients = variant === "custom" ? gradients :  variants[variant] || variants.hero

    const genrateGradients = (colors) => {
        const colorStops = colors.map(({color, stop}) => `${color} ${stop}`);
        return `radial-gradient(circle at center,  transparent 0%, transparent 30%, ${colorStops}, transparent 60%, transparent 100%)`
    }

    return (
        <div className="absolute inset-0">
            {activeGradients.map((gradient, index) => (
                <div 
                 key={index}
                 className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
                 style={
                    {
                        background: genrateGradients(gradient.colors),
                        filter: `blur(${gradient.blur})`,
                        opacity: gradient.opacity,
                    }
                 }
                 ></div>
            ))}
        </div>
    )
}

export default RadialGradientBackground;