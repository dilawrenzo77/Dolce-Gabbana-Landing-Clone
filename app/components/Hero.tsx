export default function Hero() {
    return <section className="hidden sm:flex items-start justify-center w-100dvw">
        <div className="relative bg-[url('/dg3.webp')] bg-cover bg-center bg-no-repeat h-140 min-h-screen w-full">
            <div className="absolute bottom-10 left-15 flex flex-col items-start justify-start gap-6">
                <p className="text-xs text-neutral-200 font-thin tracking-widest font-dg">WOMEN&apos;S COLLECTION FW25</p>
                <p className="font-dg text-[0.5rem] text-neutral-200 tracking-widest">Dynamic, Contemporary, and glamourous a style that catches the eye.</p>
                <p className="text-xs text-neutral-200  underline underline-offset-4 decoration-1 font-dg">DISCOVER MORE</p>
            </div>
        </div>
        <div className="relative bg-[url('/dg1.webp')] bg-cover bg-center bg-no-repeat  h-140 min-h-screen w-full">
            <div className="absolute bottom-10 left-15 flex flex-col items-start justify-start gap-6">
                <p className="text-xs text-neutral-200 font-thin tracking-widest font-dg">MEN&apos;S COLLECTION FW25</p>
                <p className="font-dg text-[0.5rem] text-neutral-200 tracking-widest">A sophisticated wardrode full of refined details and unique accessories</p>
                <p className="text-xs text-neutral-200  underline underline-offset-4 decoration-1 font-dg">DISCOVER MORE</p>
            </div>
        </div>
    </section>
};
