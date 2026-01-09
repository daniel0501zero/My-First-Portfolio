import React from 'react';

import { BiCode } from 'react-icons/bi';

const About = () => {
    return (
        <section id='about' className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-5xl md:text-6xl font-bold mb-12 text-center'>
                    About <span className='text-primary'>Me</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <img src="./src/assets/my-profile-image.jpeg" alt="" className='w-50 rounded-full mr-auto ml-auto'/>
                        <h3 className=' text-2xl font-semibold'>Passionate computer science student at the University of Hong Kong</h3>

                        <p className='text-muted-foreground text-1xl'>With a strong interest in software development and problem-solving, my journey in computer science has been driven by curiosity and a desire to create impactful solutions through technology.</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className='cosmic-button mt-auto mb-auto'>
                                Get In Touch
                            </a>

                            <a href="./src/assets/my-resume.pdf" className='px-7 py-2 rounded-full border border-primary text-foreground hover:bg-primary/10 transition-color duration-300'>
                                View My Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className='flex items-start gap-4'>
                                <div className="p-3 rounded-full bg-primary/10 mt-auto mb-auto">
                                    <BiCode className='h-6 w-6 text-primary'/>
                                </div>
                                <div className="text-left">
                                    <h4 className='font-semibold text-lg'>Web Development</h4>
                                    <p className='text-muted-foreground'>Learning and Creating responsive websites and web application with modern frameworks and libraries</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className='flex items-start gap-4'>
                                <div className="p-3 rounded-full bg-primary/10 mt-auto mb-auto">
                                    <BiCode className='h-6 w-6 text-primary'/>
                                </div>
                                <div className="text-left">
                                    <h4 className='font-semibold text-lg'>Programming</h4>
                                    <p className='text-muted-foreground'>Building applications using Python & C++.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className='flex items-start gap-4'>
                                <div className="p-3 rounded-full bg-primary/10 mt-auto mb-auto">
                                    <BiCode className='h-6 w-6 text-primary'/>
                                </div>
                                <div className="text-left">
                                    <h4 className='font-semibold text-lg'>Project Management</h4>
                                    <p className='text-muted-foreground'>Leading projects with structual process to build the foundation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;