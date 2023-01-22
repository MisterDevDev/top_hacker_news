import styled from "styled-components";

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
  padding: 16px;
  width: 30rem;
  margin: 2rem;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 85%;
  }

  }
`;

export const StyledStoryTitle = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  padding: 1rem 0 2rem;
  letter-spacing: 1px;
  text-align: center;
`;

export const StyledReadMore = styled.span`
  width: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem 5%;
`;

export const StyledStoryBy = styled.div``;

export const StyledTimeStamp = styled.div``;

export const StyledStoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface IFooterProps {
  isOpen: boolean;
}

export const StyledStoryFooter = styled.div<IFooterProps>`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
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

export const StoryTextContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  overflow-y: scroll;
  overflow-wrap: anywhere;
  max-height: 15vh;
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
`;
