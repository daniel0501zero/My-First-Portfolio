
import { MdEmail, MdMessage } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaLocationArrow, FaPhoneSquareAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { cn } from '../../lib/utils';
import { BiMessageAltAdd, BiSolidMessageSquare } from 'react-icons/bi';


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "92e1dd80-01c7-4a22-afa0-a1d99f2c6b98");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <section id='contact' className="py-24 px-4 relative bg-secondary/30">
            <div className="container max-auto max-w-5xl">
                <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center'>Get in <span className='text-primary'> touch</span></h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>I am currently available to take on new projects, feel free to contact me anytime for anything you want me to work on.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className='text-2xl font-semibold mb-6'>Contact Info</h3>

                        <div className='space-y-6 justify-center'>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10" >
                                    <MdEmail className='h-6 w-6 text-primary' />
                                </div>

                                <div>
                                    <h4 className='font-medium'> Email</h4>
                                    <a href="mailto:daniel0501zero@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                        daniel0501zero@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10" >
                                    <FaPhoneSquareAlt className='h-6 w-6 text-primary' />
                                </div>

                                <div>
                                    <h4 className='font-medium'> Phone</h4>
                                    <a href="tel:+85296055786" className='text-muted-foreground hover:text-primary transition-colors'>
                                        + (852) 9605 5786
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10" >
                                    <FaLocationArrow className='h-6 w-6 text-primary' />
                                </div>

                                <div>
                                    <h4 className='font-medium '> Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'>
                                        Wong Tai Sin, Kowloon, Hong Kong
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'> Connect with me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/yiu-ming-lo-37059b32a/" target='_blank'>
                                    <BsLinkedin size={25}/>
                                </a>
                                <a href="https://github.com/daniel0501zero" target='_blank'>
                                    <FaGithub size={25}/>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs" >
                        <h3 className='text-2xl font-semibold mb-6'> Send a Message</h3>

                        <form onSubmit={onSubmit} className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block font-medium mb-2'> Your Name</label>
                                <input type="text" name="name" id="name" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='Enter your name' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block font-medium mb-2'> Your Email</label>
                                <input type="email" name="email" id="email" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='Enter your email' />
                            </div>
                            <div>
                                <label htmlFor="message" className='block font-medium mb-2'> Your Message</label>
                                <textarea name="message" id="message" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='Enter your message' />
                            </div>

                            <button type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                Send Message
                                <BiSolidMessageSquare />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Contact;