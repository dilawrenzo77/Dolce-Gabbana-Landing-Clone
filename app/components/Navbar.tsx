"use client"
import { useState, useEffect } from "react";
import { BsBag } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";


export default function Navbar() {
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


    return <nav className={isScrolled ? "z-999 w-full px-5 py-3 flex flex-col items-center justify-start gap-4 lg:gap-7 fixed bg-neutral-100 transition-all duration-500" : "group hover:bg-neutral-200 z-999 w-full px-5 py-3 flex flex-col items-center justify-start gap-4 lg:gap-7 fixed transition-all duration-500"}>
        <div className="flex items-center justify-between w-full">
            {isScrolled 
            ?
            (
                <div className="flex items-center justify-start gap-5">
                    <p className="text-[0.5rem] lg:text-xs font-dg underline underline-offset-4 decoration-1">Fashion</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Beauty</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Casa</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Food&Beverage</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">World</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Alta Moda</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Sustainability</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">MY DG</p>
                </div>
            )
            :
            (
                <div className="flex items-center justify-start gap-5">
                    <p className="text-[0.5rem] lg:text-xs group-hover:text-neutral-800 text-neutral-100 font-dg underline underline-offset-4 decoration-1">Fashion</p>
                    <p className="text-[0.5rem] lg:text-xs group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Beauty</p>
                    <p className="text-[0.5rem] lg:text-xs group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Casa</p>
                    <p className="text-[0.5rem] lg:text-xs group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Food&Beverage</p>
                    <p className="text-[0.5rem] lg:text-xs group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">World</p>
                    <p className="text-[0.5rem] lg:text-xs group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Alta Moda</p>
                    <p className="text-[0.5rem] lg:text-xs group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Sustainability</p>
                    <p className="text-[0.5rem] lg:text-xs group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">MY DG</p>
                </div>
            )
            }
            {isScrolled
            ?
            (
                <div className="flex items-center justify-start gap-4">
                <IoSearchOutline width={8} height={8}/>
                    <p className="text-[0.5rem] lg:text-xs font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Search</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Store Location</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Login</p>
                    <BsBag width={8} height={8}/>
                </div>
            )
            :
            (
                <div className="flex items-center justify-start gap-4">
                    <IoSearchOutline width={8} height={8} className="text-neutral-100 group-hover:text-neutral-800"/>
                    <p className="text-[0.5rem] lg:text-xs group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Search</p>
                    <p className="text-[0.5rem] lg:text-xs group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Store Location</p>
                    <p className="text-[0.5rem] lg:text-xs group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">Login</p>
                    <BsBag width={8} height={8} className="text-neutral-100 group-hover:text-neutral-800"/>
                </div>
            )
            }
        </div>
        {isScrolled 
        
        ? 
            <Image src="/dg.png" width={30} height={30} alt="d&g logo"/>
        : 
            <div className="flex items-end justify-center gap-4">
                <p className="text-6xl font-semibold lg:font-bold tracking-tighter text-neutral-100 group-hover:text-neutral-800 transition-all duration-300">DOLCE</p>
                <span className="text-4xl font-semibold text-neutral-100 group-hover:text-neutral-800 transition-all duration-300">&</span>
                <p className="text-6xl font-semibold lg:font-bold  tracking-tighter text-neutral-100 group-hover:text-neutral-800 transition-all duration-300">GABBANA</p>
            </div>
        }
        {isScrolled
        ?
        (
        <div className="flex items-center justify-center gap-4">
            <p className="text-[0.6rem] lg:text-sm font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">GIFTS</p>
            <p className="text-[0.6rem] lg:text-sm font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">SNEAKERS LIMITED EDITION</p>
            <p className="text-[0.6rem] lg:text-sm font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">NEW IN</p>
            <p className="text-[0.6rem] lg:text-sm font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">WOMEN</p>
            <p className="text-[0.6rem] lg:text-sm font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">MEN</p>
            <p className="text-[0.6rem] lg:text-sm font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">CHILDREN</p>
            <p className="text-[0.6rem] lg:text-sm font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">BAGS</p>
            <p className="text-[0.6rem] lg:text-sm font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">WATCHES <span className="px-0.5">&</span>JEWELRY</p>
            <p className="text-[0.6rem] lg:text-sm font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">MY DG</p>
        </div>
        )
        :
        (
        <div className="flex items-center justify-center gap-4">
            <p className="text-[0.6rem] lg:text-sm group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">GIFTS</p>
            <p className="text-[0.6rem] lg:text-sm group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">SNEAKERS LIMITED EDITION</p>
            <p className="text-[0.6rem] lg:text-sm group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">NEW IN</p>
            <p className="text-[0.6rem] lg:text-sm group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">WOMEN</p>
            <p className="text-[0.6rem] lg:text-sm group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">MEN</p>
            <p className="text-[0.6rem] lg:text-sm group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">CHILDREN</p>
            <p className="text-[0.6rem] lg:text-sm group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">BAGS</p>
            <p className="text-[0.6rem] lg:text-sm group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">WATCHES <span className="px-0.5">&</span>JEWELRY</p>
            <p className="text-[0.6rem] lg:text-sm group-hover:text-neutral-800 text-neutral-100 font-dg hover:underline underline-offset-4 decoration-1 transition-all duration-300">MY DG</p>
        </div>
        )
        }
    </nav>
};
