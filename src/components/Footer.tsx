
export default function Footer() {
    return (
        <footer className='mt-20 md:mt-[100px]'>
            <div className="flex flex-col  gap-y-8 w-[375px] px-4  md:w-[768px] md:flex-row md:px-8 md:justify-between lg:w-[1024px]   mx-auto mb-16">
                <div>
                <svg className="w-[127px] h-[90px] 2xl:w-[259px] 2xl:h-[167px]">
                            <use xlinkHref="/images/sprite.svg#icon-Logo"></use>
                        </svg>
            </div>
            <nav className="flex flex-col gap-y-2 md:gap-y-4 font-lato font-bold text-base text-white">
                <a href="#about_us" className="hover:text-orange-400 focus:text-orange-400">About us</a>
                <a href="#tours" className="hover:text-orange-400 focus:text-orange-400">Tours</a>
                <a href="#gallery" className="hover:text-orange-400 focus:text-orange-400">Gallery</a>
                <a href="#contacts" className="hover:text-orange-400 focus:text-orange-400">Contacts</a>
                </nav>
                <div className="flex flex-col">
                    <address id='contacts'>
                <ul className="flex flex-col gap-y-2 md:gap-y-4 mb-10 md:text-right">
                    <li><a className="font-jomolhari font-normal text-lg hover:text-orange-400 focus:text-orange-400" href="tel:+38097-123-11-11">+38097-123-11-11</a></li>
                    <li><a className="font-jomolhari font-normal text-lg hover:text-orange-400 focus:text-orange-400" href="mailto:WondersOfUkraine@gmail.com">WondersOfUkraine@gmail.com</a></li>
                    <li><a className="font-jomolhari font-normal text-lg hover:text-orange-400 focus:text-orange-400" href="https://maps.app.goo.gl/QFNsXih8Q1YtZjgy6" target="_blank" rel="noopener noreferrer">Lviv, Zaporyzhka, 198</a></li>
                </ul>
            </address>
            <ul className="flex gap-x-3.5 md:self-end">
                <li><a href="#"><svg className="fill-white hover:fill-orange-400" width="24px" height="24px">
                            <use xlinkHref="/images/sprite.svg#icon-ph_instagram-logo"></use>
                        </svg></a></li>
                <li><a href="#"><svg className="fill-white hover:fill-orange-400" width="24px" height="24px">
                            <use xlinkHref="/images/sprite.svg#icon-ph_facebook-logo"></use>
                        </svg></a></li>
                <li><a href="#"><svg className="fill-white hover:fill-orange-400" width="24px" height="24px">
                            <use xlinkHref="/images/sprite.svg#icon-ph_telegram-logo"></use>
                        </svg></a></li>
            </ul></div>
            </div>
        
            <p className="text-center font-jomolhari font-normal text-sm mb-4">© All Rights Reserved</p>
        </footer>
    )
}