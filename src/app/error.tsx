"use client"

import Link from 'next/link'

export default function Error() {
  return(
    <div className='h-screen flex flex-col justify-center items-center'>
      <h2>Error</h2>
      <Link className='btn' href="/">Return Home</Link>
    </div>
  )
}
