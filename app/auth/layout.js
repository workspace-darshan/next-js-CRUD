import React from 'react'

export default function AuthLayout({ children }) {
    return (
        <div className='bg-slate-800 h-screen flex justify-center items-center'>
            <div className="bg-white p-8 text-black rounded w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                {children}
            </div>
        </div>
    )
}
