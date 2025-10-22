import React from "react"
import Logo from "./Logo"
import SearchInput from "./SearchInput"
import LoginRegisterLikeShoppingCart from "./LoginRegisterLikeShoppingCart"

type HeaderMainType = {
    children: React.ReactNode
}

const HeaderMain: React.FC<HeaderMainType> = ({ children }: HeaderMainType) => {
    return (
        <header className="container py-8">
            <div className="flex items-center justify-between">
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
        </HeaderMain>
    )
}

export default Header



