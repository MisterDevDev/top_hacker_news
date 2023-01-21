import styled from "styled-components";

export const StyledStoryContainer = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 60%;
  justify-content: center;
  grid-template-columns: repeat(2, 40%);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 80%;
    display: flex;
  }
`;

export const StyledStoryCard = styled.div`
  text-align: center;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.BACKGROUND_MODIFIER_ACCENT};
  background: rgb(48, 0, 65);
  background: linear-gradient(
    138deg,
    rgba(48, 0, 65, 0.8870141806722689) 0%,
    rgba(72, 12, 84, 0.40802258403361347) 33%,
    rgba(65, 8, 92, 0.6012998949579832) 100%
  );
  border-radius: 6px;
  padding: 16px;
`;

export const StyledStoryTitle = styled.div`
  color: pink;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 1.5rem 0 0.5rem;
  letter-spacing: 1px;
  align-text: center;
`;

export const StyledColoredTitle = styled.small`
  background: linear-gradient(
      to right,
      rgb(255, 183, 107) 0%,
      rgb(255, 167, 61) 30%,
      rgb(255, 124, 0) 60%,
      rgb(255, 127, 4) 100%
    )
    text;
`;

export const StyledTitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  min-height: 40vh;
  padding: 0 3%;
  h2 {
    margin-bottom: 25px;
  }
`;
export const StyledTitle = styled.h1`
  font-weight: 900;
  margin: 0;
  font-size: min(10vw, 64px);
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const StyledGradientText = styled.span`
  background: #ffb76b;
  background: linear-gradient(to right, #ffb76b 0%, #ffa73d 30%, #ff7c00 60%, #ff7f04 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
