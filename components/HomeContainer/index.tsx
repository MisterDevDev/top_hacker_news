import { IStory } from "@/typings";
import * as Styles from "./styles";
import { StoryCard } from "../StoryCard";
import { HeroParticles } from "./Particles";
import { useState, useRef, useEffect } from "react";
import useObserveScreen from "./useObserveScreen";

interface Props {
  topStories: IStory[];
}

export const HomeContainer = (props: Props) => {
  const [visibleStories, setVisibleStories] = useState(10);
  const lastStory = useRef(null);

  const isVisible = useObserveScreen(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    },
    lastStory
  );

  useEffect(() => {
    if (isVisible) addVisibleStories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <main>
      {renderTitleSection()}
      {renderStoryContainer()}
    </main>
  );

  function addVisibleStories() {
    if (visibleStories <= 90) setVisibleStories(visibleStories + 10);
  }

  function renderTitleSection() {
    return (
      <>
        <HeroParticles />
        <Styles.StyledHeroArea>
          <Styles.StyledSubtitleBox>
            <Styles.StyledTitle>Hacker News</Styles.StyledTitle>
            <Styles.StyledGradientText>
              <i>Top 100</i>
            </Styles.StyledGradientText>
          </Styles.StyledSubtitleBox>
        </Styles.StyledHeroArea>
      </>
    );
  }

  function renderStoryContainer() {
    return <Styles.StyledStoryContainer>{renderStories()}</Styles.StyledStoryContainer>;
  }

  function renderStories() {
    return (
      <>
        {props.topStories.map((story: IStory, idx) => {
          if (story.deleted) return <></>;
          if (idx + 1 === visibleStories) {
            return (
              <Styles.StyledStoryCard key={story.id}>
                <div ref={lastStory} aria-label="news-story">
                  <StoryCard story={story} />
                </div>
              </Styles.StyledStoryCard>
            );
          }
          if (idx + 1 < visibleStories) {
            return (
              <Styles.StyledStoryCard key={story.id}>
                <div aria-label="news-story">
                  <StoryCard story={story} />
                </div>
              </Styles.StyledStoryCard>
            );
          }
        })}
      </>
    );
  }
};
