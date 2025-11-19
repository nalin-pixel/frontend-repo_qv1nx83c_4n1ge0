import { useState } from 'react'

export default function Filters({ onChange }) {
  const [branch, setBranch] = useState('All')
  const [year, setYear] = useState('All')
  const [type, setType] = useState('All')

  const emit = (b = branch, y = year, t = type) => {
    onChange && onChange({ branch: b, year: y, type: t })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <select value={branch} onChange={(e)=>{setBranch(e.target.value); emit(e.target.value)}} className="px-4 py-3 rounded-2xl bg-white/70 border border-white/60 text-sm text-ink">
        {['All','BTech','BBA','BCA','IT'].map(b=> <option key={b} value={b}>{b}</option>)}
      </select>
      <select value={year} onChange={(e)=>{setYear(e.target.value); emit(undefined,e.target.value)}} className="px-4 py-3 rounded-2xl bg-white/70 border border-white/60 text-sm text-ink">
        {['All','1st Year','2nd Year','3rd Year','4th Year'].map(y=> <option key={y} value={y}>{y}</option>)}
      </select>
      <select value={type} onChange={(e)=>{setType(e.target.value); emit(undefined,undefined,e.target.value)}} className="px-4 py-3 rounded-2xl bg-white/70 border border-white/60 text-sm text-ink">
        {['All','Mid-sem','End-sem','Notes'].map(t=> <option key={t} value={t}>{t}</option>)}
      </select>
    </div>
  )
}
