import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { auth, signIn, signOut } from '@/auth'

const Navbar = async () => {
  const session=await auth();

  return (
    <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>

        <div className='flex items-center gap-5'>
          {session && session?.user ? (
            <>
              <Link href="/dashboard" className='text-gray-600 hover:text-gray-800'>
                <span>Create</span>
              </Link>

              <form action={async ()=> {
                "use server"
                await signOut({redirectTo: '/'})
              }}>
                <button type='submit'>
                  <span>Logout</span>
                </button>
              </form>
              

              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
            ):(
              <form action={async ()=> {
                "use server"
                await signIn('github')
              }}>
                <button type='submit'>
                  <span>Login</span>
                </button>
                
              </form>
            )
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar