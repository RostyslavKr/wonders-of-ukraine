"use client";
import Link from "next/link"
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";


export default function Modal() {
    const router = useRouter();

    const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
    };
    
    return (<Dialog.Root open onOpenChange={handleOnOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[url('/images/background_reviews.png')] bg-contain bg-[#141A19] bg-no-repeat bg-bottom" />

        <Dialog.DialogContent className="relative ">
          <div className="px-4 pt-4 min-w-[375px] flex justify-between items-center mx-auto mb-[150px]"><div>
                <svg width="64px" height="46px">
                            <use xlinkHref="/images/sprite.svg#icon-Logo"></use>
                        </svg>
                </div>
                   <Dialog.Close asChild> 
                <svg width={40} height={40}><use xlinkHref="/images/sprite.svg#icon-x">
            </use></svg></Dialog.Close>
                </div>
            
            
               <nav className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4 font-lato font-bold text-base text-white">
                <Link href="/#about_us" className="hover:text-orange-400 focus:text-orange-400">About us</Link>
                <Link href="/#tours" className="hover:text-orange-400 focus:text-orange-400">Tours</Link>
                <Link href="/#gallery" className="hover:text-orange-400 focus:text-orange-400">Gallery</Link>
                <Link href="/#contacts" className="hover:text-orange-400 focus:text-orange-400">Contacts</Link>
                </nav> 
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
   
        
        
        
    )
}



{/* <div className="fixed h-full w-full bg-[url('/images/background_reviews.png')] bg-contain bg-[#141A19] bg-no-repeat bg-bottom mx-auto  z-10 md:hidden">
            <div className="px-4 pt-4 min-w-[375px] flex justify-between items-center mx-auto mb-[150px]"><div>
                <svg width="64px" height="46px">
                            <use xlinkHref="/images/sprite.svg#icon-Logo"></use>
                        </svg>
            </div>
                <Link href='/' ><svg width={40} height={40}><use xlinkHref="/images/sprite.svg#icon-x">
            </use></svg></Link>
                </div>
            
            
               <nav className="flex flex-col justify-center items-center gap-y-2 md:gap-y-4 font-lato font-bold text-base text-white">
                <a href="#about_us" className="hover:text-orange-400 focus:text-orange-400">About us</a>
                <a href="#tours" className="hover:text-orange-400 focus:text-orange-400">Tours</a>
                <a href="#gallery" className="hover:text-orange-400 focus:text-orange-400">Gallery</a>
                <a href="#contacts" className="hover:text-orange-400 focus:text-orange-400">Contacts</a>
                </nav> 
            
        </div> */}