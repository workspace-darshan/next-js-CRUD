import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center flex-col w-full'>
            <h3 className='text-xl font-bold mb-10 uppercase'>
                Login page
            </h3>
            <form className='w-full'>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <div className='flex justify-center items-start flex-col w-full'>
                        <label className="text-sm mb-1 font-semibold">Email</label>
                        <input className='p-2 border w-full' type='email' placeholder='Email' />
                    </div>
                    <div className='flex justify-center items-start flex-col w-full'>
                        <label className="text-sm mb-1 font-semibold">Password</label>
                        <input className='p-2 border w-full' type='password' placeholder='Password' />
                    </div>
                    <button className='bg-blue-500 w-full py-2 rounded text-white' type='submit'>Login</button>
                    <div className='text-md'>
                        You haven't registered yet? <Link href="/auth/register" className="text-blue-500 hover:underline font-semibold">Register</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default page