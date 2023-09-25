import React from 'react'

export default function Callout({ children, type }: { children: React.ReactNode; type: string }) {
  return (
    <div className="bg-red-200">
      <pre>aslfkjas</pre>
      {children}
    </div>
  )
}
