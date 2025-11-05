import { CiHeart } from "react-icons/ci";

export default function Section2() {
    return <section className="flex flex-col items-center justify-start gap-15 py-10">
        <div className="flex items-center justify-between w-full px-15">
            <p className="text-xs lg:text-sm font-dg tracking-widest">GIFT IDEAS</p>
            <div className="flex items-center justify-center gap-3">
                <p className="underline underline-offset-4 decoration-1 text-xs lg:text-sm font-dg tracking-widest">FOR HER</p>
                <p  className="text-xs lg:text-sm font-dg tracking-widest">FOR HIM</p>
            </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-7 px-4">
            <div className="flex flex-col items-start justify-start gap-2">
                <div className="relative bg-[url('/dg7.webp')] bg-cover bg-center bg-no-repeat h-65 w-50 pt-4 px-4">
                    <p className="absolute -rotate-90 text-[0.5rem] font-dg top-10 left-[-13]">NEW COLLECTION</p>
                    <CiHeart width={10} height={10} className="absolute top-2 right-5"/>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-[0.5rem] lg:text-xs font-dg tracking-widest">Lace and satin bra top</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg tracking-widest">&euro;695</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
                <div className="relative bg-[url('/dg8.webp')] bg-cover bg-center bg-no-repeat h-65 w-50">
                    <p className="absolute -rotate-90 text-[0.5rem] font-dg top-10 left-[-13]">NEW COLLECTION</p>
                    <CiHeart width={10} height={10} className="absolute top-2 right-5"/>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-[0.5rem] lg:text-xs font-dg tracking-widest">Calf saint tropez Light sneakers with leo print</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg tracking-widest">&euro;795</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
                <div className="relative bg-[url('/dg6.jpg')] bg-cover bg-center bg-no-repeat h-65 w-50">
                    <p className="absolute -rotate-90 text-[0.5rem] font-dg top-10 left-[-13]">NEW COLLECTION</p>
                    <CiHeart width={10} height={10} className="absolute top-2 right-5"/>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-[0.5rem] lg:text-xs font-dg tracking-widest">Capri crow&apos;s nest</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg tracking-widest">&euro;1550</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
                <div className="relative bg-[url('/dg5.webp')] bg-cover bg-center bg-no-repeat h-65 w-50">
                    <p className="absolute -rotate-90 text-[0.5rem] font-dg top-10 left-[-13]">NEW COLLECTION</p>
                    <CiHeart width={10} height={10} className="absolute top-2 right-5"/>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-[0.5rem] lg:text-xs font-dg tracking-widest">Silk twil stole</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg tracking-widest">&euro;295</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
                <div className="relative bg-[url('/dg9h.webp')] bg-cover bg-center bg-no-repeat h-65 w-50">
                    <p className="absolute -rotate-90 text-[0.5rem] font-dg top-10 left-[-13]">NEW COLLECTION</p>
                    <CiHeart width={10} height={10} className="absolute top-2 right-5"/>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-[0.5rem] lg:text-xs font-dg tracking-widest">Chevron-print silk chiffon shirt</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg tracking-widest">&euro;1450</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
                <div className="relative bg-[url('/dg9i.webp')] bg-cover bg-center bg-no-repeat h-65 w-50">
                    <p className="absolute -rotate-90 text-[0.5rem] font-dg top-10 left-[-13]">NEW COLLECTION</p>
                    <CiHeart width={10} height={10} className="absolute top-2 right-5"/>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-[0.5rem] lg:text-xs font-dg tracking-widest">Porcelain</p>
                    <p className="text-[0.5rem] lg:text-xs font-dg tracking-widest">&euro;195</p>
                </div>
            </div>
        </div>
    </section>
};
