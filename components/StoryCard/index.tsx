import { story } from "@/typings";
import * as Styles from "./styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IoMdEye, IoMdClose } from "react-icons/io";
import { useState } from "react";
import parse from "html-react-parser";

dayjs.extend(relativeTime);

interface Props {
  story: story;
}

export const StoryCard = (props: Props) => {
  const [showText, setShowText] = useState(false);

  return <>{renderStoryCard()}</>;

  function renderStoryCard() {
    return (
      <Styles.StyledStoryCard key={props.story.id}>
        {props.story.text && (
          <Styles.StyledReadMore>
            {!showText && <IoMdEye size={18} onClick={() => setShowText(!showText)} />}
            {showText && <IoMdClose size={18} onClick={() => setShowText(!showText)} />}
          </Styles.StyledReadMore>
        )}
        {renderBody()}
        {!showText && renderFooter()}
      </Styles.StyledStoryCard>
    );
  }

  function renderBody() {
    return showText ? (
      <Styles.StoryTextContainer>{parse(props.story.text ?? "")}</Styles.StoryTextContainer>
    ) : (
      <>
        <Styles.StyledStoryTitle>
          {props.story.title} <br />
          <small style={{ fontWeight: "initial", fontSize: "80%" }}>
            {props.story.score} points by {props.story.by}
          </small>
        </Styles.StyledStoryTitle>
      </>
    );
  }

  function getTime() {
    const relativeStoryTime = dayjs.unix(props.story.time).fromNow();
    return relativeStoryTime.includes("days")
      ? dayjs.unix(props.story.time).format("MMM DD, YYYY")
      : relativeStoryTime;
  }

  function renderFooter() {
    return (
      <Styles.StyledStoryFooter>
        <div style={{ display: "flex", justifyContent: "space-around", padding: "0% 15%" }}>
          <p>{props.story.descendants} Comments</p>
          <p>{getTime()}</p>
        </div>
      </Styles.StyledStoryFooter>
    );
  }
};
