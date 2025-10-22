import Link from 'next/link'
import React, { JSX } from 'react'

type ButtonRegisterLogin = {
    title: string,
    icon?: React.ReactNode,
    route: string
}

const ButtonRegisterLogin = ({ title, route, icon }: ButtonRegisterLogin) => {
    return (
        <Link href={route} className="flex items-center bg-primary-color text-white font-yekan_bakh_semi_bold gap-2 h-9.5 rounded-lg w-34.5  justify-center">
            {icon}
            <span className='text-[13px]'>{title}</span>
        </Link>
    )
}

export default ButtonRegisterLogin
