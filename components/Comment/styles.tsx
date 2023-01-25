import styled from "styled-components";

export const StyledCommentContainer = styled.div`
  padding: 10px;
  font-weight: normal;
  font-size: 14px;
  background-color: rgb(32, 28, 82);
  border-radius: 1rem;
  margin: 5px;
  word-wrap: break-word;
`;

export const StyledParsedSpan = styled.span`
  pre {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }
`;

export const StyledReplyContainer = styled.div`
  margin-left: 10px;
`;

export const StyledHoverSpan = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #e1e1e1;
    text-decoration-thickness: 0.5px;
  }
`;

export const StyledReplyLink = styled.div`
  text-align: right;
  padding-bottom: 1em;
  padding-right: 1em;
`;

export const StyledAuthorContainer = styled.div`
  padding-bottom: 5px;
  font-size: 0.8em;
`;

export const StyledAuthorSpan = styled.span`
  color: #e9967a;
  font-weight: bold;
  font-size: 1.4em;
`;
