import { useState } from "react";
import { Comment } from "../Comment";
import * as Styles from "./styles";

interface Props {
  kids: number[];
  isReply?: boolean;
}

export const CommentsContainer = (props: Props) => {
  const [visibleComments, setVisibleComments] = useState(0);

  return <>{renderCommentsContainer()}</>;

  function renderCommentsContainer() {
    return (
      <Styles.StyledContentContainer>
        {props.kids.map((kid_id: number, idx) => {
          if (idx <= visibleComments)
            return <Comment key={kid_id} kid_id={kid_id} isNestedReply={!!props.isReply} />;
        })}
        {visibleComments < props.kids.length - 1 && renderMoreLink()}
      </Styles.StyledContentContainer>
    );
  }

  function renderMoreLink() {
    if (props.isReply) return renderMoreReplies();
    return renderMoreComments();
  }

  function renderMoreReplies() {
    return (
      <Styles.StyledHoverSpan
        style={{ paddingLeft: "10px" }}
        onClick={() => setVisibleComments(visibleComments + 3)}
      >
        More Replies
      </Styles.StyledHoverSpan>
    );
  }

  function renderMoreComments() {
    return (
      <Styles.StyledMoreComments>
        <Styles.StyledHoverSpan
          style={{ paddingLeft: "10px" }}
          onClick={() => setVisibleComments(visibleComments + 3)}
        >
          {props.isReply ? "More Replies" : "More Comments"}
        </Styles.StyledHoverSpan>
      </Styles.StyledMoreComments>
    );
  }
};
