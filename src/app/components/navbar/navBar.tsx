'use client'
import { NavBarContainer, NavLink, NavItems, Logo } from './navbarStyles';

export default function NavBar() {
    return (
        <NavBarContainer>
            <Logo>E-comercer</Logo>
            <NavItems>
                <NavLink href="/create">Create</NavLink>
                <NavLink href="/">HomeAdmin</NavLink>
                <NavLink href="/homeCard">HomeCards</NavLink>
            </NavItems>
        </NavBarContainer>
    );
}
