import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { cn } from "../../lib/utils";


const ThemeToggle = () => {
    
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
        else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }   
        else {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
            localStorage.setItem("theme", "dark");
        }
    }


    return (
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden")}>
            {isDarkMode ? <IoSunny className="h-6 w-6 text-yellow-300"/> : <IoMoon className="h-6 w-6 text-blue-900"/>}
        </button>
    )
}

export default ThemeToggle;