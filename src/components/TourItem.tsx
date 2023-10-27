import Image from "next/image"
interface ITourData {
    image: string;
    title: string;
    description: string[];
    price: string;
}
interface ITourProps{
    tour: ITourData;
}
export default function TourItem({tour}: ITourProps) { 
    const {image, title, description, price } = tour; 
    return (
        <div className="animate-flip-up animate-once">
           <Image className="mb-4 md:mb-10" src={image} alt={title} width={768} height={515} />
              
            <div className="flex flex-col justify-between h-[580px] px-4 md:w-[768px] md:px-10 lg:w-[438px]">
                <h3 className="font-jomolhari font-normal text-2xl md:text-[32px] mb-8">{title}</h3>
            <ul className="mb-8">
                {description.map((d, index) => (<li className="list-none md:list-disc font-lato font-normal text-base" key={index}>{d}</li>))}
                
                </ul>
                <p className="font-jomolhari font-normal text-lg mb-4">Included:</p>
            <ul className="flex flex-col gap-y-2 mb-8">
                <li className="flex gap-x-4"><svg width="24px" height="24px">
                            <use xlinkHref="/images/sprite.svg#icon-directions_bus"></use>
                        </svg> <p className="font-lato font-normal text-base">Transfer</p></li>
                <li className="flex gap-x-4"><svg width="24px" height="24px">
                            <use xlinkHref="/images/sprite.svg#icon-id-card"></use>
                        </svg> <p className="font-lato font-normal text-base">Travel insurance</p></li>
                <li className="flex gap-x-4"><svg width="24px" height="24px">
                            <use xlinkHref="/images/sprite.svg#icon-face"></use>
                        </svg> <p className="font-lato font-normal text-base">Professional guide</p></li>
                <li className="flex gap-x-4"><svg width="24px" height="24px">
                            <use xlinkHref="/images/sprite.svg#icon-ticket-blank"></use>
                        </svg> <p className="font-lato font-normal text-base"> Travel insurance</p></li>
                    </ul>
                    <div className="flex flex-col-reverse gap-y-8 md:flex-row md:gap-x-9 items-center">
                        <a className="w-full md:w-auto font-jomolhari font-normal text-base text-center  py-4 px-12  bg-lime-900 rounded-lg hover:scale-105 focus:scale-105" href="#start_travel">Book</a>
            <p className="self-start font-jomolhari font-normal text-2xl md:self-center">Price: <span className="ml-3">{price}</span></p></div>
            </div>
            </div>
            
        
    )
}