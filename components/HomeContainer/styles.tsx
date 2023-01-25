import styled, { keyframes } from "styled-components";
import img from "../../public/hacker_news_hero.jpg";

export const StyledStoryContainer = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const StyledTitle = styled.h1`
  font-weight: 900;
  margin: 0;
  font-size: min(14vw, 72px);
  filter: brightness(100%);
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

export const StyledHeroArea = styled.section`
  position: relative;
  display: flex;
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
