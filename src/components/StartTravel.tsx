import FormBook from "./FormBook"

export default function StartTravel() {
    return (
        <section id='start_travel' className='mt-20 md:mt-[100px]'>
            <div className="flex justify-center bg-[url('/images/wheat_field.png')] bg-cover bg-no-repeat bg-center py-14 mx-auto">
                <div className=" w-[375px] px-4 mx-auto py-10 flex flex-col gap-8 md:flex-row   justify-center items-center md:mx-0 md:px-[49px]  md:py-[69px] md:self-end md:w-[700px]   bg-[#141A19] md:border-2 md:rounded md:border-white">
                    <div className="self-start flex flex-col gap-y-6">
                    <h3 className="font-jomolhari font-normal text-[32px]">Start travel</h3>
                    <p className="font-lato font-normal text-sm text-left">If you want to get an unforgettable trip, quickly fill out the application and we will contact you during the day</p>
                    <p className="font-lato font-normal text-sm text-left">We are ready to answer any questions and help choose the best tour</p>
                </div>
                <FormBook /></div>
                
            </div>
        </section>
    )
}