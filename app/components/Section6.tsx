import { BiSolidCaretRightCircle } from "react-icons/bi";
import { BiSolidCaretLeftCircle } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";


export default function Section6() {
    return <section className="flex flex-col items-center justify-start gap-20 bg-neutral-950 px-20 py-20">
        <div className="flex sm:flex-row sm:items-center sm:justify-between w-full flex-col items-center justify-start gap-6">
            <p className="text-xs text-center font-dg text-neutral-200 underline underline-offset-2 decoration-1">WORLD OF DOLCE&GABBANA</p>
            <div className="flex items-center justify-center gap-4">
                <p className="font-dg text-xs text-neutral-200">Fashion Shows</p>
                <span className="font-bold text-neutral-200">|</span>
                <div className="flex items-center justify-center gap-2">
                    <BiSolidCaretRightCircle width={20} height={20} className="text-neutral-200"/>
                    <BiSolidCaretLeftCircle width={20} height={20} className="text-neutral-200"/>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-6 px-2">
            <div className="flex flex-col items-start justify-start gap-4">
                <div className="relative bg-[url('/dg9d.webp')] bg-cover bg-center bg-no-repeat h-55 w-40 pt-4 px-4">
                </div>
                <div className="flex flex-col items-start justify-start gap-4">
                    <p className="text-[0.6rem] font-dg tracking-widest text-neutral-200">Women&apos;s Spring/Summer,<br/> 2026 Fashion Show</p>
                    <p className="text-[0.5rem] font-dg tracking-widest text-neutral-200">#DGSS26</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
                <div className="relative bg-[url('/dg9e.webp')] bg-cover bg-center bg-no-repeat h-55 w-40 pt-4 px-4">
                </div>
                <div className="flex flex-col items-start justify-start gap-4">
                    <p className="text-[0.6rem] font-dg tracking-widest text-neutral-200">Men&apos;s Spring/Summer,<br/> 2026 Fashion Show</p>
                    <p className="text-[0.5rem] font-dg tracking-widest text-neutral-200">Pyjama boys</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
                <div className="relative bg-[url('/dg9f.webp')] bg-cover bg-center bg-no-repeat h-55 w-40 pt-4 px-4">
                </div>
                <div className="flex flex-col items-start justify-start gap-4">
                    <p className="text-[0.6rem] font-dg tracking-widest text-neutral-200">Women&apos;s Fall/Winter,<br/> 2025 Fashion Show</p>
                    <p className="text-[0.5rem] font-dg tracking-widest text-neutral-200">cool girls</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
                <div className="relative bg-[url('/dg9g.webp')] bg-cover bg-center bg-no-repeat h-55 w-40 pt-4 px-4">
                </div>
                <div className="flex flex-col items-start justify-start gap-4">
                    <p className="text-[0.6rem] font-dg tracking-widest text-neutral-200">Men&apos;s Fall/Winter,<br/> 2025 Fashion Show</p>
                    <p className="text-[0.5rem] font-dg tracking-widest text-neutral-200">Paparazzi</p>
                </div>
            </div>
        </div>
        <p className="text-sm underline underline-offset-4 decoration-2 text-neutral-200">VIEW ALL</p>
    </section>
};
