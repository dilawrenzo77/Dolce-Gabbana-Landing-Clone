import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Section8() {
    return <section className="w-100dvw px-10 py-4 bg-neutral-950 flex flex-col items-start justify-start gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-neutral-500">
        <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center gap-3">
            <div>
                <p className="text-neutral-200 font-dg text-xs text-[0.5rem] lg:text-xs">SERVICES</p>
            </div>
            <div>
                <p className="text-neutral-200 font-dg text-xs text-[0.5rem] lg:text-xs">ORDER TRACKING</p>
            </div>
            <div>
                <p className="text-neutral-200 font-dg text-xs text-[0.5rem] lg:text-xs">RETURNS</p>
            </div>
            <div className="w-full flex items-center justify-between sm:justify-center gap-2 ">
                <p className="text-neutral-200 font-dg text-xs text-[0.5rem] lg:text-xs">CUSTOMER CARE</p>
                <span className="text-neutral-200 text-[0.5rem] lg:text-xs">+</span>
            </div>
            <div className="w-full flex items-center justify-between sm:justify-center gap-2">
                <p className="text-neutral-200 font-dg text-xs text-[0.5rem] lg:text-xs">LEGAL AREA</p>
                <span className="text-neutral-200 text-[0.5rem] lg:text-xs">+</span>
            </div>
            <div className="w-full flex items-center justify-between sm:justify-center gap-2">
                <p className="text-neutral-200 font-dg text-xs text-[0.5rem] lg:text-xs">CORPRATE</p>
                <span className="text-neutral-200 text-[0.5rem] lg:text-xs">+</span>
            </div>
            <div className="w-full flex items-center justify-between sm:justify-center gap-2">
                <p className="text-neutral-200 font-dg text-[0.5rem] lg:text-xs">FOLLOW US</p>
                <span className="text-neutral-200 text-[0.5rem] lg:text-xs">+</span>
            </div>
        </div>
        <div>
            <div className="w-full flex items-center justify-between sm:justify-center gap-2">
                <p className="text-neutral-200 font-dg text-[0.5rem] lg:text-xs">COUNTRY & LANGUAGE</p>
                <p className="text-neutral-200 font-dg text-[0.5rem] tracking-widest">italy / english </p>
                <MdOutlineKeyboardArrowDown width={8} height={8} className="text-neutral-200"/>
            </div>
        </div>
    </section>
};
