import { IStory } from "@/typings";
import * as Styles from "./styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IoMdEye, IoMdClose } from "react-icons/io";
import { useState } from "react";
import HTMLparse from "html-react-parser";
import { CommentsContainer } from "../CommentsContainer";

dayjs.extend(relativeTime);

interface Props {
  story: IStory;
}

export const StoryCard = (props: Props) => {
  const [showText, setShowText] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return <>{renderStoryCard()}</>;

  function renderStoryCard() {
    return (
      <>
        <Styles.StyledContentContainer>
          {renderHeader()}
          {renderStoryText()}
          {!showText && renderStory()}
        </Styles.StyledContentContainer>
        {!showText && renderComments()}
      </>
    );
  }

  function renderStoryText() {
    return (
      <>
        <Styles.StyledTextContainer isOpen={showText}>
          {HTMLparse(props.story.text ?? "")}
        </Styles.StyledTextContainer>
      </>
    );
  }

  function renderStory() {
    return (
      <>
        {renderBody()}
        {renderFooter()}
      </>
    );
  }

  function renderHeader() {
    const websiteText = getWebsite();
    return (
      <Styles.StyledStoryHeader>
        <Styles.StyledStoryBy>
          {props.story.score + " points by "}
          <Styles.StyledAuthorSpan>{props.story.by}</Styles.StyledAuthorSpan> <br />
          {websiteText && "(" + websiteText + ")"}
        </Styles.StyledStoryBy>
        {props.story.text && renderTextIcon()}
      </Styles.StyledStoryHeader>
    );
  }

  function renderTextIcon() {
    return showText ? (
      <Styles.StyledHoverSpan>
        <IoMdClose size={18} onClick={() => setShowText(false)} />
      </Styles.StyledHoverSpan>
    ) : (
      <Styles.StyledHoverSpan>
        <IoMdEye size={18} onClick={() => setShowText(true)} />
      </Styles.StyledHoverSpan>
    );
  }

  function renderBody() {
    return (
      <Styles.StyledStoryTitle onClick={() => openWebsite()}>
        <Styles.StyledHoverSpan>{props.story.title}</Styles.StyledHoverSpan>
      </Styles.StyledStoryTitle>
    );
  }

  function renderFooter() {
    return (
      <Styles.StyledStoryFooter isOpen={showComments}>
        <Styles.StyledHoverSpan onClick={() => setShowComments(!showComments)}>
          {showComments ? "Close Comments" : "View " + props.story.descendants + " Comments"}
        </Styles.StyledHoverSpan>
        <span>{getTime()}</span>
      </Styles.StyledStoryFooter>
    );
  }

  function renderComments() {
    return showComments && props.story.kids?.[0] && <CommentsContainer kids={props.story.kids} />;
  }

  function getTime() {
    const relativeStoryTime = dayjs.unix(props.story.time).fromNow();
    return relativeStoryTime.includes("days")
      ? dayjs.unix(props.story.time).format("MMM DD, YYYY")
      : relativeStoryTime;
  }

  function getWebsite() {
    try {
      const urlString = new URL(props.story.url).hostname;
      return urlString.replace(/^www\./, "").trim();
    } catch (error) {
      return "";
    }
  }

  function openWebsite() {
    window.open(props.story.url);
  }
};
