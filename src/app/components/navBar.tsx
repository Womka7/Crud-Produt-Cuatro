'use client'
import { NavBarContainer, NavLink, NavItems, Logo } from './styles/navbarStyles';

export default function NavBar() {
    return (
        <NavBarContainer>
            <Logo>E-comercer</Logo>
            <NavItems>
                <NavLink href="/create">Create</NavLink>
                <NavLink href="/">Read-home</NavLink>
            </NavItems>
        </NavBarContainer>
    );
}
