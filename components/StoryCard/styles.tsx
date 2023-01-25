import styled, { keyframes } from "styled-components";

export const StyledStoryCard = styled.div`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.BACKGROUND_MODIFIER_ACCENT};
  background: rgb(9, 4, 66);
  background: linear-gradient(
    138deg,
    rgba(16, 8, 80, 0.8870141806722689) 0%,
    rgba(30, 16, 94, 0.40802258403361347) 33%,
    rgba(22, 12, 82, 0.6012998949579832) 100%
  );
  border-radius: 6px;
  margin: 2rem;
  position: relative;
  width: 60%;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledStoryTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  padding: 1rem 0 2rem;
  letter-spacing: 1px;
  text-align: center;
`;

export const StyledHoverSpan = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #e1e1e1;
    text-decoration-thickness: 0.5px;
  }
`;

export const StyledReadMore = styled.span`
  width: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem 5%;
`;

export const StyledStoryBy = styled.div``;

export const StyledStoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledContentContainer = styled.div`
  padding: 24px 10%;
  transition: transform 250ms;

  &:hover {
    transform: translateY(-1px);
    background-color: rgb(32, 28, 82);
  }

  @media only screen and (max-width: 768px) {
    padding: 12px 24px;
  }
`;

interface IFooterProps {
  isOpen: boolean;
}

export const StyledStoryFooter = styled.div<IFooterProps>`
  display: flex;
  justify-content: space-between;
  border-bottom: ${props => {
    return props.isOpen ? `1px solid ${props.theme.BLACK_LIGHT}` : "none";
  }};
`;

export const StyledViewComments = styled.span`
  width: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem 5%;
`;

interface ITextContainerProps {
  isOpen: boolean;
}

export const StyledTextContainer = styled.div<ITextContainerProps>`
  width: 100%;
  overflow-y: auto;
  overflow-wrap: anywhere;
  font-size: 1.1rem;
  font-weight: initial;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #aaa;
  }

  ::-webkit-scrollbar-track {
    padding-left: 1rem;
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  transition: all 0.5s ease-in;

  max-height: ${props => {
    return props.isOpen ? `80vh` : "0";
  }};

  opacity: ${props => {
    return props.isOpen ? `100%` : "0";
  }};

  padding-top: ${props => {
    return props.isOpen ? `1.5rem` : "0";
  }};
`;

export const StyledAuthorSpan = styled.span`
  color: #e9967a;
  font-weight: bold;
  font-size: 1.1em;
`;
