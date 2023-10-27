import Link from "next/link"


export default function Header() {
    
    
  
    return (<header className="absolute w-screen ">
            <div className=" px-4 pt-4 min-w-[375px] flex justify-between items-center md:w-[768px] md:px-8 lg:w-[1024px] mx-auto animate-fade-down animate-once ">
                <div>
                <svg width="64px" height="46px">
                            <use xlinkHref="/images/sprite.svg#icon-Logo"></use>
                        </svg>
                </div>
                <div className="md:hidden">
                    <Link href="/modal"><svg width="40px" height="40px">
                        <use xlinkHref="/images/sprite.svg#icon-ci_menu-alt-05"></use>
                    </svg></Link>
                    
                </div>
            <nav className="hidden md:flex md:gap-x-16 md:font-lato md:font-bold md:text-base md:text-white">
                <a href="#about_us" className="hover:text-orange-400 focus:text-orange-400">About us</a>
                <a href="#tours" className="hover:text-orange-400 focus:text-orange-400">Tours</a>
                <a href="#gallery" className="hover:text-orange-400 focus:text-orange-400">Gallery</a>
                <a href="#contacts" className="hover:text-orange-400 focus:text-orange-400">Contacts</a>
            </nav>
            </div>
           
        </header>
        
    )
}

