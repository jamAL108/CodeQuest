'use client';
import { useRouter } from 'next/navigation'
const Activity= () => {
  const router = useRouter()
  return (
    <div>Activity hai bhauu

      <button onClick={(e)=>{{
        console.log(router.pathname)
        router.push('/')
      }}}>nice</button>
    </div>
  )
}

export default Activity