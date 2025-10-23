import React from "react"
import Logo from "./Logo"
import SearchInput from "./SearchInput"
import LoginRegisterLikeShoppingCart from "./LoginRegisterLikeShoppingCart"
import Menu from "./Menu"
import BottomHeader from "./BottomHeader"

type HeaderMainType = {
    children: React.ReactNode
}

const HeaderMain: React.FC<HeaderMainType> = ({ children }: HeaderMainType) => {
    return (
        <header>
            <div className="container flex items-center justify-between gap-4 py-3 md:py-8">
                {children}
            </div>

            <BottomHeader  />
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



