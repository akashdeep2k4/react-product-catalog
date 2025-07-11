// Footer.jsx - Application footer component
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainer>
      {/* Copyright text with current year */}
      <FooterText>© {new Date().getFullYear()} Product Catlog. All rights reserved. </FooterText>
    </FooterContainer>
  );
};

// Styled components for footer layout
const FooterContainer = styled.footer`
  max-width: 1280px;
  width: 100%;
  height: 64px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
`;

const FooterText = styled.p`
  font-size: 14px;
  padding-top: 22px;
  text-align: center;
`;
