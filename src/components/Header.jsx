// Header.jsx - Application header with logo, theme toggle, and cart icon
import { FiMoon, FiShoppingBag, FiShoppingCart, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = ({ isDarkTheme, toggleTheme }) => {
  return (
    <HeaderContainer>
      {/* Logo links to home */}
      <Logo to={"/"}>
        <FiShoppingBag /> Product Catlog
      </Logo>
      <Buttons>
        {/* Theme toggle button */}
        <ThemeButton onClick={toggleTheme}> {isDarkTheme ? <FiMoon /> : <FiSun />} </ThemeButton>
        {/* Cart icon button (no action) */}
        <CartButton>
          <FiShoppingCart />
        </CartButton>
      </Buttons>
    </HeaderContainer>
  );
};

// Styled components for header layout
const HeaderContainer = styled.header`
  max-width: 1280px;
  width: 100%;
  height: 64px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 20px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ThemeButton = styled.button`
  font-size: 20px;
  padding: 4px 8px;
`;
const CartButton = styled.button`
  font-size: 20px;
  padding: 4px 8px;
`;
