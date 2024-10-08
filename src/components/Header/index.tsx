import React, { useState } from 'react'
import { HeaderComponent, RedButton, Link, MenuButton } from './styles'
import logo from '../../assets/logoS.svg'
import menuClosed from '../../assets/menuClosed.svg'
import menuOpen from '../../assets/menuOpen.svg'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <HeaderComponent>
        <RedButton>Go back</RedButton>
        <Link>Story</Link>
        <Link>Shop</Link>
        <img src={logo} />
        <Link>Contact</Link>
        <Link>Wholesale</Link>
        <RedButton>Clone</RedButton>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={isMenuOpen ? menuOpen : menuClosed}/>
        </MenuButton>
    </HeaderComponent>
  )
}

export default Header