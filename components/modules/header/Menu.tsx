'use client'
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoMenuOutline } from 'react-icons/io5'

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const closeHandler = () => {
        setIsOpen(false)
    }

    const openHandler = () => {
        setIsOpen(true)
    }
    return (
        <>
            <IoMenuOutline size={30} className="cursor-pointer md:hidden" onClick={openHandler} />

            <div className={`md:hidden bg-white transition-all duration-300 shadow-md ${isOpen ? 'opacity-100' : 'opacity-0'} h-screen w-full min-[480px]:w-1/2 fixed top-0 ${isOpen ? 'left-0' : '-left-120'} bottom-0 p-3`}>
                <IoMdClose className="pb-3 cursor-pointer" size={40} onClick={closeHandler} />
                <div className="flex bg-secondary-color h-12 w-full rounded-[10px] justify-between overflow-hidden">
                    <input type="text" placeholder="محصول مورد نظر را جستجو کنید" className="px-2 outline-0 w-full font-yekan_bakh_semi_bold placeholder:text-secondary-text-color placeholder:text-xs" name="search" />
                    <div className="bg-primary-color w-12.5 h-12 flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.4785 21.9565C15.6062 21.9565 18.1249 21.2974 19.6533 19.8237C21.1731 18.3582 21.9561 15.8484 21.9561 11.478C21.956 7.10783 21.1731 4.59881 19.6533 3.1333C18.1249 1.6595 15.6064 1.00052 11.4785 1.00049C7.35046 1.00049 4.83116 1.65947 3.30273 3.1333C1.78311 4.59884 1.00003 7.10807 1 11.478C1 15.8484 1.78293 18.3582 3.30273 19.8237C4.83116 21.2976 7.35046 21.9565 11.4785 21.9565Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22.9564 22.9565L20.3477 20.3478" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
