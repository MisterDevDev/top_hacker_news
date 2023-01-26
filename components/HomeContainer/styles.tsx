import styled from "styled-components";
import img from "../../public/hacker_news_hero.jpg";

export const StyledStoryContainer = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: 8em;
  filter: brightness(100%);
  background-image: linear-gradient(
    ${({ theme }) => {
      return `to right, ${theme.CRIMSON} 15%, ${theme.DARK_SALMON} 25%, ${theme.CRIMSON} 55%, ${theme.DARK_SALMON} 100%`;
    }}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  @media only screen and (max-width: 1025px) {
    font-size: 5em;
  }
`;

export const StyledGradientText = styled.h4`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 3em;
  filter: brightness(100%);
  text-align: right;
  background-image: linear-gradient(
    ${({ theme }) => {
      return `to right, ${theme.DANGER} 15%, ${theme.TEXT_DANGER} 25%, ${theme.DANGER} 55%, ${theme.TEXT_DANGER} 100%`;
    }}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 1025px) {
    font-size: 2em;
  }
`;

export const StyledSubtitleBox = styled.div`
  position: relative;
  padding: 80px;
`;

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

export const StyledHeroArea = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${img.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 50%;
  }
`;
