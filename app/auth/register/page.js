import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center flex-col w-full'>
            <h3 className='text-xl font-bold mb-10 uppercase'>
                Register page
            </h3>
            <form className='w-full'>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <div className='flex justify-center items-start flex-col w-full'>
                        <label className="text-sm mb-1 font-semibold">Name</label>
                        <input className='p-2 border w-full' type='text' placeholder='Name' />
                    </div>
                    <div className='flex justify-center items-start flex-col w-full'>
                        <label className="text-sm mb-1 font-semibold">Email</label>
                        <input className='p-2 border w-full' type='email' placeholder='Email' />
                    </div>
                    <div className='flex justify-center items-start flex-col w-full'>
                        <label className="text-sm mb-1 font-semibold">Phone Number</label>
                        <input
                            className='p-2 border w-full rounded'
                            type='tel'
                            placeholder='Enter your phone number'
                            pattern="[0-9]{10}"
                            inputMode="numeric"
                        />
                    </div>
                    <div className='flex justify-center items-start flex-col w-full'>
                        <label className="text-sm mb-1 font-semibold">Password</label>
                        <input className='p-2 border w-full' type='password' placeholder='Password' />
                    </div>
                    <button className='bg-blue-500 w-full py-2 rounded text-white' type='submit'>Login</button>
                    <div className='text-md'>
                        You have a Account... <Link href="/auth/login" className="text-blue-500 hover:underline font-semibold">Login</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default page