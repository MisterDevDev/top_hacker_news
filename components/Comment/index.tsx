import { IComment } from "@/typings";
import { useState, useEffect } from "react";
import HTMLparse from "html-react-parser";
import * as Styles from "./styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CommentsContainer } from "../CommentsContainer";
import { IoIosReturnRight } from "react-icons/io";
import { CgCornerUpRight } from "react-icons/cg";

dayjs.extend(relativeTime);

interface Props {
  kid_id: number;
  isNestedReply?: boolean;
}

export const Comment = (props: Props) => {
  const [comment, setComment] = useState<IComment | undefined>();
  const [showReplies, setShowReplies] = useState(false);

  useEffect(() => {
    (async () => {
      const request = `https://hacker-news.firebaseio.com/v0/item/${props.kid_id}.json?print=pretty`;
      const response = await fetch(request);
      setComment(await response.json());
    })();
  }, [props.kid_id]);

  if (!comment) return <>{renderLoading()}</>;

  return <>{renderComment()}</>;

  function renderComment() {
    if (comment?.deleted) return <>{renderDeletedComment()}</>;
    return (
      <>
        <Styles.StyledCommentContainer>
          <div aria-label="comment-section">
            {renderAuthor()}
            {renderText()}
          </div>
        </Styles.StyledCommentContainer>
        {renderReplies()}
      </>
    );
  }

  function renderAuthor() {
    return (
      <Styles.StyledAuthorContainer>
        <Styles.StyledAuthorSpan>{comment?.by ?? ""}</Styles.StyledAuthorSpan> {" " + getTime()}
      </Styles.StyledAuthorContainer>
    );
  }

  function renderText() {
    return <Styles.StyledParsedSpan>{HTMLparse(comment?.text ?? "")}</Styles.StyledParsedSpan>;
  }

  function getTime() {
    if (Number(comment?.time ?? 0)) {
      return dayjs.unix(comment?.time ?? 0).fromNow();
    }
    return "";
  }

  function renderReplies() {
    if (comment?.kids?.[0])
      return (
        <>
          {!showReplies && (
            <Styles.StyledReplyLink>
              <IoIosReturnRight size={18} />
              <Styles.StyledHoverSpan onClick={() => setShowReplies(true)}>
                {comment.kids.length + getReply()}
              </Styles.StyledHoverSpan>
            </Styles.StyledReplyLink>
          )}
          {showReplies && !props.isNestedReply && (
            <Styles.StyledReplyLink>
              <CgCornerUpRight size={18} />
              <Styles.StyledHoverSpan onClick={() => setShowReplies(false)}>
                {"Close " + getReply()}
              </Styles.StyledHoverSpan>
            </Styles.StyledReplyLink>
          )}
          {showReplies && (
            <Styles.StyledReplyContainer>
              <CommentsContainer isReply kids={comment.kids} />
            </Styles.StyledReplyContainer>
          )}
        </>
      );
    return <></>;
  }

  function getReply() {
    return (comment?.kids?.length ?? 0) > 1 ? " Replies" : " Reply";
  }

  function renderDeletedComment() {
    <Styles.StyledCommentContainer>
      <span>
        <i>Post Deleted</i>
      </span>
    </Styles.StyledCommentContainer>;
  }

  function renderLoading() {
    <Styles.StyledCommentContainer>
      <span>Loading...</span>
    </Styles.StyledCommentContainer>;
  }
};
