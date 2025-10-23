import Link from 'next/link'
import React from 'react'

type ButtonType = {
    route: string,
    title: string,
    icon?: React.ReactNode,
    bgColor: string,
    className?: string,
    width?: string
}

const Button = ({ route, title, icon, bgColor, className, width }: ButtonType) => {
    return (
        <Link href={route} className={`h-12 px-3 ${bgColor} text-white rounded-[7px] flex items-center gap-2 font-yekan_bakh_semi_bold text-[14.53px] justify-center ${className}`} style={{ width: width }}>
            {icon}
            {title}
        </Link>
    )
}

export default Button
