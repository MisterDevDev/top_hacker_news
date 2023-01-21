import Head from "next/head";
import { story } from "@/typings";
import { HomeContainer } from "@/components/HomeContainer";

interface Props {
  topStories: story[];
}

export default function HomePage(props: Props) {
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

export async function getServerSideProps() {
  const topStoryIdRes = await fetch(`https://hacker-news.firebaseio.com/v0/beststories.json? 
  print=pretty&orderBy="$key"&limitToFirst=100`);

  const topStoryIds = await topStoryIdRes.json();

  const fetchList = topStoryIds.map((id: number) => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
  });

  const topStoriesRes = await Promise.all(fetchList);

  const topStories = [];

  for (let i = 0; i < topStoriesRes.length; i++) {
    topStories.push(await topStoriesRes[i].json());
  }

  return { props: { topStories } };
}
