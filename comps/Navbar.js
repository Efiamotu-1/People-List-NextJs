import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <Image src="/logo.png" width={128} height={77} alt="logo"/>
        </div>

      <Link href="/">Home</Link>  
      <Link href="/about">About</Link>  
      <Link href="/people">People listing</Link>          
    </nav>
  )
}

export default Navbar