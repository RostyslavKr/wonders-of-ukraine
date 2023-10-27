export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center  bg-[url('/images/hero.png')] bg-cover bg-no-repeat bg-center md:pr-8 pt-52 mx-auto">
            <div className=" flex flex-col justify-items-center items-center mb-[225px] md:mb-[135px] ">
                <p className="text-2xl text-center font-jomolhari md:text-5xl font-normal animate-fade-left animate-once ">Unlock the Wonders 
                <br />of</p>
            <p className=" text-[64px] font-jomolhari md:text-9xl font-normal  md:mb-16 animate-fade-right animate-once">Ukraine</p>
                <a href="#tours" className=" font-jomolhari font-normal text-base  py-4 px-12  bg-lime-900 rounded-lg hover:scale-105 focus:scale-105">Our tours</a>
            </div>
            <ul className="flex mb-8 md:flex-col md:self-end md:justify-self-end gap-3.5 md:mb-16">
                <li><a href="#"><svg className="fill-white hover:fill-orange-400" width="24px" height="24px">
                            <use xlinkHref="/images/sprite.svg#icon-ph_instagram-logo"></use>
                        </svg></a></li>
                <li><a href="#"><svg className="fill-white hover:fill-orange-400" width="24px" height="24px">
                            <use xlinkHref="/images/sprite.svg#icon-ph_facebook-logo"></use>
                        </svg></a></li>
                <li><a href="#"><svg className="fill-white hover:fill-orange-400" width="24px" height="24px">
                            <use xlinkHref="/images/sprite.svg#icon-ph_telegram-logo"></use>
                        </svg></a></li>
            </ul>
                
            
            
        </section>
    )
}
