'use client'
import styled from 'styled-components';
import Link from 'next/link';

// Contenedor de la barra de navegación
export const NavBarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

// Estilo para los enlaces de navegación
export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    color: #ddd;
  }
`;

// Contenedor para los elementos de navegación
export const NavItems = styled.div`
  display: flex;
`;

// Estilo del logo o título de la app
export const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
`;
