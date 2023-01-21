import { story } from "@/typings";
import * as Styles from "./styles";

interface Props {
  topStories: story[];
}

export const HomeContainer = (props: Props) => {
  return (
    <main style={{ textAlign: "center" }}>
      {renderTitleSection()}
      {renderStoryContainer()}
    </main>
  );

  function renderTitleSection() {
    return (
      <Styles.StyledTitleSection id="main">
        <Styles.StyledTitle>
          <Styles.StyledGradientText>Hacker</Styles.StyledGradientText> News
        </Styles.StyledTitle>
      </Styles.StyledTitleSection>
    );
  }

  function renderStoryContainer() {
    return <Styles.StyledStoryContainer>{renderStories()}</Styles.StyledStoryContainer>;
  }

  function renderStories() {
    return (
      <>
        {props.topStories.map((story: story, idx) => {
          return (
            <Styles.StyledStoryCard key={story.id}>
              <Styles.StyledStoryTitle>{story.title}</Styles.StyledStoryTitle>
              <div>
                <p>
                  {story.score} points by {story.by}
                </p>
                <p>{story.descendants} Comments</p>
              </div>
            </Styles.StyledStoryCard>
          );
        })}
      </>
    );
  }
};
