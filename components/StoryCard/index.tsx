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
      <Styles.StyledStoryCard key={props.story.id}>
        {showText && renderStoryText()}
        {!showText && renderStory()}
      </Styles.StyledStoryCard>
    );
  }

  function renderStoryText() {
    return (
      <>
        {renderHeader()}
        <Styles.StoryTextContainer>{HTMLparse(props.story.text ?? "")}</Styles.StoryTextContainer>
      </>
    );
  }

  function renderStory() {
    return (
      <>
        {renderHeader()}
        {renderBody()}
        {renderFooter()}
        {renderComments()}
      </>
    );
  }

  function renderHeader() {
    return (
      <Styles.StyledStoryHeader>
        <Styles.StyledStoryBy>
          {props.story.score + " points by " + props.story.by} <br /> {getWebsite()}
        </Styles.StyledStoryBy>
        {props.story.text && renderTextIcon()}
      </Styles.StyledStoryHeader>
    );
  }

  function renderTextIcon() {
    return showText ? (
      <IoMdClose size={18} onClick={() => setShowText(false)} />
    ) : (
      <IoMdEye size={18} onClick={() => setShowText(true)} />
    );
  }

  function renderBody() {
    return <Styles.StyledStoryTitle>{props.story.title}</Styles.StyledStoryTitle>;
  }

  function renderFooter() {
    return (
      <Styles.StyledStoryFooter isOpen={showComments}>
        <div onClick={() => setShowComments(!showComments)}>
          {showComments ? "Close Comments" : "View " + props.story.descendants + " Comments"}
        </div>
        <Styles.StyledTimeStamp>{getTime()}</Styles.StyledTimeStamp>
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
      return urlString.replace(/^www\./, "");
    } catch (error) {
      return "";
    }
  }
};
