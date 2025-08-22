export default function Header({ name, title, contacts, onPrint, theme, onTheme }) {
return (
    <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 dark:bg-slate-900/90">
        <div className="mx-auto max-w-4xl px-4 py-6 flex flex-col items-center border-b border-slate-200 w-full">
            <h1 className="text-xl sm:text-3xl font-medium tracking-tight text-center w-full">{name}</h1>
            {/* <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center w-full">{title}</p> */}
            <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-sm mt-2 w-full">
                <a className="text-blue-400 hover:underline break-all" href={`tel:${contacts.phone}`}>{contacts.phone}</a>
                <span className="hidden sm:inline">|</span>
                <a className="text-blue-400 hover:underline break-all" href={`mailto:${contacts.email}`}>{contacts.email}</a>
                <span className="hidden sm:inline">|</span>
                <a className="text-blue-400 hover:underline" href={contacts.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span className="hidden sm:inline">|</span>
                <a className="text-blue-400 hover:underline" href={contacts.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </nav>
            {/* <div className="flex flex-col sm:flex-row justify-center mt-2 gap-2 w-full"> */}
                {/* <button
                    onClick={onPrint}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
                >
                    <span className="inline-flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9V2h12v7M6 18h12v4H6v-4zM6 14h12v4H6v-4zM6 14V9m12 5V9" />
                        </svg>
                        Print CV
                    </span>
                </button> */}
                {/* <button onClick={() => onTheme(theme === 'dark' ? 'light' : 'dark')} className="px-3 py-1.5 border rounded w-full sm:w-auto">
                    {theme === 'dark' ? 'Light' : 'Dark'}
                </button> */}
            {/* </div> */}
        </div>
    </header>
)
}
