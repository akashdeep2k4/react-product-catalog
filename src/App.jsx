// App.jsx - Main application layout and theme provider
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./style";
import { Toaster } from "react-hot-toast";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";

export const App = () => {
  // State to manage dark/light theme
  const [isDarkTheme, setIsDarkTheme] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
  // Toggle between dark and light theme
  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Toaster />
      <>
        {/* Header with theme toggle */}
        <HeaderWrapper>
          <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        </HeaderWrapper>

        {/* Main content area */}
        <MainWrapper>
          <MainContainer>
            <Outlet />
          </MainContainer>
        </MainWrapper>

        {/* Footer */}
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </>
    </ThemeProvider>
  );
};

// Styled components for layout wrappers
const HeaderWrapper = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 9;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.secondary};
`;

const MainWrapper = styled.div`
  width: 100%;
`;

const FooterWrapper = styled.div`
  border-top: 2px solid ${({ theme }) => theme.secondary};
`;

const MainContainer = styled.main`
  margin-top: 64px;
  max-width: 1280px;
  width: 100%;
  margin-inline: auto;
  min-height: 100vh;
  padding-block: 32px;
  padding-inline: clamp(16px, 3.123vw, 32px);
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
`;
