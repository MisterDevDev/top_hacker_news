import styled from "styled-components";

export const StyledStoryContainer = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const StyledColoredTitle = styled.small`
  linear-gradient(
    to right,
    rgb(255, 183, 107) 0%,
    rgb(255, 167, 61) 30%,
    rgb(255, 124, 0) 60%,
    rgb(255, 117, 1) 100%
  )
  text;
`;

export const StyledTitleSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  h2 {
    margin-bottom: 25px;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 900;
  margin: 0;
  font-size: min(14vw, 72px);
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const StyledGradientText = styled.span`
  background: #ff7f04;
  background: linear-gradient(to right, #ff7f04 0%, #fc830d 30%, #fc8714 70%, #f78b20 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
