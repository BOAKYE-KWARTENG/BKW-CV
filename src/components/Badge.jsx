export default function Badge({ children, active=false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-sm border transition
        ${active ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' 
                 : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'}
      `}
    >
      {children}
    </button>
  )
}
