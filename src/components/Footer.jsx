import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='bg-light w-100 d-flex flex-column justify-content-center'>
        <div className='text-center' >
         <h4>Links</h4>
          <Link style={{textDecoration:'none'}} to={'/'}>Login</Link> <br />
          <Link style={{textDecoration:'none'}} to={'/reg'}>Registration</Link> <br />
          {/* <Link style={{textDecoration:'none'}} to={'/login'}>Login</Link> */}
        </div>
        <div className='text-center'>
          <p>&copy;Academic Details 2024</p>
        </div>
    </div>

    </>
  )
}

export default Footer