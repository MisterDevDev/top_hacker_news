import { useState } from "react";
import { Comment } from "../Comment";

interface Props {
  kids: number[];
  isReply?: boolean;
}

export const CommentsContainer = (props: Props) => {
  const [visibleComments, setVisibleComments] = useState(0);

  return <>{renderCommentsContainer()}</>;

  function renderCommentsContainer() {
    return (
      <div>
        {props.kids.map((kid_id: number, idx) => {
          if (idx <= visibleComments) return <Comment key={kid_id} kid_id={kid_id} />;
        })}
        {visibleComments < props.kids.length - 1 && (
          <span
            style={{ paddingLeft: "10px" }}
            onClick={() => setVisibleComments(visibleComments + 3)}
          >
            {props.isReply ? "More Replies" : "View more"}
          </span>
        )}
      </div>
    );
  }
};
