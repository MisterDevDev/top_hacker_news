import { useState } from "react";
import { Comment } from "../Comment";
import * as Styles from "./styles";
import { RxArrowUp } from "react-icons/rx";

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
        style={{ paddingLeft: "20px" }}
        onClick={() => setVisibleComments(visibleComments + 3)}
      >
        <RxArrowUp size={12} /> More Replies
      </Styles.StyledHoverSpan>
    );
  }

  function renderMoreComments() {
    return (
      <Styles.StyledMoreComments style={{ textAlign: "center" }}>
        <Styles.StyledHoverSpan
          style={{ paddingLeft: "10px" }}
          onClick={() => setVisibleComments(visibleComments + 3)}
        >
          More Comments
        </Styles.StyledHoverSpan>
      </Styles.StyledMoreComments>
    );
  }
};
