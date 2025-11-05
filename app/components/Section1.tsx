export default function Section1() {
    return <section>
        <div className="relative bg-[url('/dg2.webp')] bg-cover bg-center bg-no-repeat h-140 min-h-screen w-full">
            <div className="absolute bottom-10 left-15 flex flex-col items-start justify-start gap-6">
                <p className="text-neutral-200 text-sm lg:text-md font-dg">NEW IN: MEN&apos;S TRAVEL COLLECTION</p>
                <p className="text-neutral-200 underline underline-offset-4 decoration-1 text-xs lg:text-sm font-dg">SHOP NOW</p>
            </div>
        </div>
        <div className="relative bg-[url('/dg4.webp')] bg-cover bg-center bg-no-repeat h-140 min-h-screen w-full">
            <div className="absolute bottom-19 left-15 flex flex-col items-start justify-start gap-6">
                <p className="text-neutral-200 text-sm lg:text-md font-dg">GIFT IDEAS</p>
                <p className="text-neutral-200 text-[0.5rem] lg:text-xs font-dg tracking-widest">Creation that reveal an iconic style in every detail. Choose the perfect to delight someone you love.</p>
                <div className="flex items-center justify-center gap-5">
                    <p className="text-neutral-200 underline underline-offset-4 decoration-1 text-xs lg:text-sm font-dg">SHOP WOMEN</p>
                    <p className="text-neutral-200 underline underline-offset-4 decoration-1 text-xs lg:text-sm font-dg">SHOP MEN</p>
                </div>
            </div>
        </div>
    </section>
};
