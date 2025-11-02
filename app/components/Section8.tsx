import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Section8() {
    return <section className="w-100dvw px-10 py-4 bg-neutral-950 flex flex-col items-start justify-start gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-neutral-500">
        <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center gap-3">
            <div>
                <p className="text-neutral-200 font-dg text-xs text-[0.5rem]">SERVICES</p>
            </div>
            <div>
                <p className="text-neutral-200 font-dg text-xs text-[0.5rem]">ORDER TRACKING</p>
            </div>
            <div>
                <p className="text-neutral-200 font-dg text-xs text-[0.5rem]">RETURNS</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <p className="text-neutral-200 font-dg text-xs text-[0.5rem]">CUSTOMER CARE</p>
                <span className="text-neutral-200 text-[0.5rem]">+</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <p className="text-neutral-200 font-dg text-xs text-[0.5rem]">LEGAL AREA</p>
                <span className="text-neutral-200 text-[0.5rem]">+</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <p className="text-neutral-200 font-dg text-xs text-[0.5rem]">CORPRATE</p>
                <span className="text-neutral-200 text-[0.5rem]">+</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <p className="text-neutral-200 font-dg text-[0.5rem]">FOLLOW US</p>
                <span className="text-neutral-200 text-[0.5rem]">+</span>
            </div>
        </div>
        <div>
            <div className="flex items-center justify-center gap-4">
                <p className="text-neutral-200 font-dg text-[0.5rem]">COUNTRY & LANGUAGE</p>
                <p className="text-neutral-200 font-dg text-[0.4rem] tracking-widest">italy / english </p>
                <MdOutlineKeyboardArrowDown width={8} height={8} className="text-neutral-200"/>
            </div>
        </div>
    </section>
};
