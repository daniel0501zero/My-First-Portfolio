
import { FaArrowRight } from "react-icons/fa";


const MyWork = () => {

    return (
        <section id='projects' className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center'>
                    My latest <span className='text-primary'> projects </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src="./src/assets/Tiny-dungeon.png" alt="" onClick={() => { window.open("https://github.com/daniel0501zero/Tiny-Dungeon") }}
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                        </div>
                        <div className='p-6'>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>Python</span>
                            </div>
                        </div>
                        <h3 className='text-xl font-semibold mb-2'> Tiny Dungeon</h3>

                        <p className='text-muted-foreground text-sm mb-4'>
                            My first project
                        </p>
                    </div>
                    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src="./src/assets/ultimate-tic-tac-toe.png" alt="" onClick={() => { window.open("https://github.com/daniel0501zero/Ultimate_tic_tac_toe") }}
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                        </div>
                        <div className='p-6'>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>C++</span>
                            </div>
                        </div>

                        <h3 className='text-xl font-semibold mb-2'> Ultimate-Tic-Tac-Toe</h3>

                        <p className='text-muted-foreground text-sm mb-4'>
                            My first project
                        </p>
                    </div>
                    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src="./src/assets/ultimate-tic-tac-toe.png" alt="" onClick={() => { window.open("https://github.com/daniel0501zero/Ultimate_tic_tac_toe") }}
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                        </div>
                        <div className='p-6'>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>C++</span>
                            </div>
                        </div>

                        <h3 className='text-xl font-semibold mb-2'> Ultimate-Tic-Tac-Toe</h3>

                        <p className='text-muted-foreground text-sm mb-4'>
                            My first project
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/daniel0501zero" target="_blank"className='cosmic-button w-fit flex items-center mx-auto gap-5'>
                        Have a look of My GitHub <FaArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )

}

export default MyWork;