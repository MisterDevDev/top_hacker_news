import styled from "styled-components";

export const StyledStoryCard = styled.div`
  text-align: center;
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
  padding: 16px;
  width: 75%;
  margin: 2rem;
  position: relative;
`;

export const StyledStoryTitle = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  padding: 1rem 0 2rem;
  letter-spacing: 1px;
  align-text: center;
`;

export const StyledStoryFooter = styled.span`
  width: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const StyledReadMore = styled.span`
  width: auto;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem 1rem;
`;

// export const StyledStoryType = styled.span`
//   width: auto;
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   padding: 16px 1rem;
// `;

export const StoryTextContainer = styled.div`
  margin-top: 1rem;
  overflow-y: scroll;
  max-height: 15vh;
  font-size: 1.1rem;
  font-weight: initial;
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #aaa;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }
`;
