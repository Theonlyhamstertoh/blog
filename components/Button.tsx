import Link from 'next/link'
import React from 'react'

function StyledButton({ href, label }: { href: string; label: string }) {
  return (
    <button className="animate-bounce-smooth shadow-lg shadow-primary-50 dark:shadow-primary-900 font-medium border-primary-400 dark:border-primary-600 border px-3 py-3 rounded-md text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
      <Link href={href}>{label}</Link>
    </button>
  )
}

export default StyledButton
