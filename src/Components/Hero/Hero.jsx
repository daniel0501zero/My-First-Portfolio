import { BsArrowDown } from 'react-icons/bs';

import React from 'react';

const Hero = () => {


    return (
        <section id='hero' className="relative min-h-screen flex flex-col items-center justify-center px-4 ">
            <div className="container max-w-4xl mx-auto text-center z-10 bg-background">
                <div className="space-y-6">
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'> Hi , I'm</span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'> Daniel</span>
                        <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Lo</span>
                    </h1>
                    <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                        I am student from the University of Hong Kong major in Computer Science
                    </p>
                    <div className='pt-4 opacity-0 animate-fade-in-delay-4 text-lg'>
                        <a href="#projects" className='cosmic-button mr-auto ml-auto'>View my work</a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className='text-md text-muted-foreground gap-12'> Scroll </span>
                <BsArrowDown className='h-5 w-5 text-primary' />
            </div>
        </section>
    );
}

export default Hero;
