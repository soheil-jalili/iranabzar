import React from "react"
import Logo from "./Logo"
import SearchInput from "./SearchInput"
import LoginRegisterLikeShoppingCart from "./LoginRegisterLikeShoppingCart"

import Menu from "./Menu"

type HeaderMainType = {
    children: React.ReactNode
}

const HeaderMain: React.FC<HeaderMainType> = ({ children }: HeaderMainType) => {
    return (
        <header className="container py-3 md:py-8">
            <div className="flex items-center justify-between gap-4">
                {children}
            </div>
        </header>
    )
}


const Header: React.FC = () => {
    return (
        <HeaderMain>
            <Logo />
            <SearchInput />
            <LoginRegisterLikeShoppingCart />
            <Menu />
        </HeaderMain>
    )
}

export default Header



