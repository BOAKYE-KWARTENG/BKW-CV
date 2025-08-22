import { useState } from 'react'

export default function ExperienceItem({ role }) {
  const [open, setOpen] = useState(false)
return (
    <div className="group mb-12">
        <div className="flex items-start justify-between gap-4">
            <div>
                <h3 className="font-medium">{role.title}</h3>
                <div className="text-slate-700 dark:text-slate-300">{role.company}</div>
                <p className="text-sm text-slate-500">{role.location} • {role.from} — {role.to}</p>
            </div>
        </div>
        <ul className="mt-2 pl-5 list-disc text-sm space-y-1 print:block">
            {role.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
    </div>
)
}
