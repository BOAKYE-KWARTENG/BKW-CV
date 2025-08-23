export default function Section({ title, children, right }) {
return (
    <section className="py-12 px-4 border-b border-slate-200 last:border-0">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <h2 className="text-left text-sm font-bold uppercase tracking-widest text-black dark:text-white min-w-0 sm:min-w-40">
                {title}
            </h2>
            <div className="flex-1">{children}</div>
            {right}
        </div>
    </section>
)
}
