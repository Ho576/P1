import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
    <>
    
    <div className='BG'>
    <div className='myItem'>
   <Link className='item' to={'/user/index'}><p>index</p></Link>
    </div> 
    <div className='myItem'>
   <Link className='item' to={'/user/create'}><p>create</p></Link>
    </div> 

    </div>
  
    </>
  )
}
