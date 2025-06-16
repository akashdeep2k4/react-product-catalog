// NotFound.jsx - 404 error page for unmatched routes
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <StyledNotFound>
      {/* 404 status and message */}
      <StatusCode>404</StatusCode>
      <Message>Page Not Found</Message>
      <Description>The page you're looking for doesn't exist.</Description>
      {/* Back button navigates to previous page */}
      <BackButton onClick={() => navigate(-1)}>
        <FiArrowLeft size={20} />
        Go Back
      </BackButton>
    </StyledNotFound>
  );
};

// Styled components for NotFound page layout
const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  text-align: center;
`;

const StatusCode = styled.h1`
  font-size: 80px;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 8px;
`;

const Message = styled.h2`
  font-size: 32px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.secondary};
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.tertiary};
  margin-bottom: 32px;
`;

const BackButton = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
`;
