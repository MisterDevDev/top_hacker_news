import { IStory } from "@/typings";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { HomeContainer } from "@/components/HomeContainer";

interface Props {
  topStories: IStory[];
}

export default function HomePage(props: Props) {
  const router = useRouter();

  if (!props.topStories) return <h2>Loading...</h2>;

  return (
    <>
      <Head>
        <title>Top 100 Hacker News</title>
        <meta name="description" content="Top 100 Hacker News articles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer topStories={props.topStories} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const topStoryIds = await getTopStoryIds();

  const topStoryList = await getStoryList(topStoryIds);

  return {
    props: {
      topStories: topStoryList,
    },
    revalidate: 10,
  };
};

async function getTopStoryIds() {
  return await (
    await fetch(
      `https://hacker-news.firebaseio.com/v0/beststories.json? 
      print=pretty&orderBy="$key"&limitToFirst=100`
    )
  ).json();
}

async function getStoryList(topStoryIds: number[]) {
  const fetchList = topStoryIds.map((id: number) => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
  });

  const topStoriesRes = await Promise.all(fetchList);

  const topStories = [];

  for (let i = 0; i < topStoriesRes.length; i++) {
    topStories.push(await topStoriesRes[i].json());
  }

  return topStories;
}
