export default function Section7() {
    return <section className="bg-neutral-950 px-10 py-8 w-100dvw flex flex-col items-center justify-start gap-10 border-y border-neutral-500">
        <p className="text-sm font-dg text-neutral-200">DOLCE<span className="text-[0.6rem] font-dg text-neutral-200">&</span>GABBANA</p>
        <div className="w-full flex flex-col items-center justify-start gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col items-start justify-start gap-5">
                <div className="flex flex-col items-start justify-start gap-1">
                    <p className="text-xs font-dg text-neutral-200">STORE LOCATOR</p>
                    <p className="text-[0.5rem] font-dg text-neutral-200">Enter a location to find the nearest DG Stores</p>
                </div>
                <div className="flex items-center justify-between w-50 border-b border-neutral-500 py-3">
                    <p className="text-[0.4rem] font-dg text-neutral-500">search by city or postcode</p>
                    <p className="text-[0.5rem] font-dg text-neutral-200">Search</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-5">
                <div>
                    <p className="text-xs font-dg text-neutral-200">SUBSCRIBE TO OUR NEWSLETTER</p>                </div>
                <div className="flex items-center justify-between w-50 border-b border-neutral-500 py-3">
                    <p className="text-[0.4rem] font-dg text-neutral-500">insert your email</p>
                    <p className="text-[0.5rem] font-dg text-neutral-200">Confirm</p>
                </div>
            </div>
        </div>
    </section>
};
