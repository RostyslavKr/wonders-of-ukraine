import Image from "next/image"

interface IReviewItemData {
    name: string;
    text: string;
    avatar: string;
}
interface ReviewItemProps {
    review: IReviewItemData;
}
export default function ReviewItem({ review }: ReviewItemProps) {
    const { name, avatar, text } = review;

    return (
        <div className="p-8 h-[333px] border-2 border-white rounded  ">
            <div className="flex gap-x-6 items-center mb-8">
                <Image src={avatar} alt={name} width={80} height={80} />   
            <div className="flex flex-col gap-y-2">
                <p className="font-jomolhari font-normal text-xl">{name}</p>
                <Image src={'/images/Raiting.png'} alt="raiting" width={136} height={24} />
            </div></div>
            
            <p className="font-lato font-normal text-sm text-left">{text}</p>
     </div>
    )
}