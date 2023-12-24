import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h1>Dashboard page</h1>
      <Link href='/activity' replace>Go to actitvy</Link>
    </div>
  )
}

export default page