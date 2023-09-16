import React, {useState } from 'react';
import Button from './Button';


const Nav = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"ABOUT",link:"/"},
      {name:"PORTFOLIO",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'> 
      <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins]
      text-black'>
        <span className='text-3x1 text-black mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        Jonah Rinehart
      </div>
      <div onClick={()=>setOpen(!open)}
       className='text-3x1 absolute right-8 top-6 
      cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>


      <ul className={`md:flex md:items-center md:pb-0 
      pb-12 absolute md:static bg-white md:z-auto z-[-1] 
      left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 
      ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
        {
          Links.map((Link)=>(
          <li key ={Link.name} className='md:ml-8 text-xl 
          md:my-0 my-7'>
            <a href={Link.link} className='text-black hover:text-gray-400 duration-500 '>{Link.name}</a>
          </li>
        ))
        }
        <Button>
          Get started
        </Button>
        

      </ul>
      </div>
    </div>
  )
    
}


export default Nav