import React from 'react'
import Link from 'next/link';

 const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around" ,fontSize:"30px",backgroundColor:"black",color:"white"}}>
        <Link href="/">Home</Link>
        <Link href="/project">Project</Link>
       
    </div>
  )
}

export default Navbar;