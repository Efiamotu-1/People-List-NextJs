import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


const Notfound = () => {
    
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    })


  return (
    <div>
        <h1>Oooops....</h1>
        <h3>Page not found</h3>
        <p>Go back to <Link href="/" className='not-found'><span>Home Page</span></Link></p>
    </div>
  )
}

export default Notfound