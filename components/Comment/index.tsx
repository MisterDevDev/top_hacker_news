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

  return (
    <>
      {renderComment()}
      {renderReplies()}
    </>
  );

  function renderComment() {
    return (
      <Styles.StyledCommentContainer>
        {renderAuthor()}
        {renderText()}
      </Styles.StyledCommentContainer>
    );
  }

  function renderAuthor() {
    return (
      <div style={{ paddingBottom: "5px", color: "#c4c4c4" }}>
        <b>{(comment?.by ?? "") + " " + getTime()}</b>
      </div>
    );
  }

  function renderText() {
    return <span>{HTMLparse(comment?.text ?? "")}</span>;
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
            <div style={{ textAlign: "right" }}>
              <IoIosReturnRight size={18} />
              <span onClick={() => setShowReplies(true)}>{comment.kids.length + getReply()}</span>
            </div>
          )}
          {showReplies && (
            <div style={{ textAlign: "right" }}>
              <CgCornerUpRight size={18} />
              <span onClick={() => setShowReplies(false)}>{"Close " + getReply()}</span>
            </div>
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
};
