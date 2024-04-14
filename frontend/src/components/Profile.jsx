import React from 'react'

const Profile = ({onLogout}) => {
  return (
    <>
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100 '>TU</div>
        <div>
            <p className='text-sm font-medium'>Markiv</p>
            <button className='text-sm text-slate-700 underline' onClick={onLogout}>Logout</button>
        </div>

    </div>
    
    </>
  )
}

export default Profile