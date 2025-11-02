import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { useState, useEffect} from "react";

export default function MobileNav() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    
        useEffect(() => {
            const handleScroll = () => {
                const scrollTop = window.pageYOffset;
                if (scrollTop > 50) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            };
    
            window.addEventListener('scroll', handleScroll);
    
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        
        },[]);

    return <nav className={isScrolled ? "z-999 w-full fixed flex items-center justify-between px-7 py-5 bg-neutral-100 transition-all duration-300" : "z-999 w-full fixed flex items-center justify-between px-7 py-5 transition-all duration-300"}>
        <div className="flex items-center justify-center">
            {isScrolled
            ?
            (
                <p className="text-lg font-dg font-semibold tracking-tighter text-neutral-800">DOLCE <span className="text-sm font-dg text-neutral-800">&</span> GABBANA</p>
            )
            :
            (
                <p className="text-lg font-dg font-semibold tracking-tighter text-neutral-100">DOLCE <span className="text-sm font-dg text-neutral-100">&</span> GABBANA</p>
            )
            }
        </div>
        {isScrolled
        ?
        (
        <div className="flex items-center justify-center gap-5">
            <CiSearch width={20} height={20} className="text-neutral-800"/>
            <RxPerson width={20} height={20} className="text-neutral-800"/>
            <BsBag width={20} height={20} className="text-neutral-800"/>
            <RxHamburgerMenu width={20} height={20} className="text-neutral-800"/>
        </div>
        )
        :
        (
        <div className="flex items-center justify-center gap-5">
            <CiSearch width={20} height={20} className="text-neutral-100"/>
            <RxPerson width={20} height={20} className="text-neutral-100"/>
            <BsBag width={20} height={20} className="text-neutral-100"/>
            <RxHamburgerMenu width={20} height={20} className="text-neutral-100"/>
        </div>
        )
        }
    </nav>
};
