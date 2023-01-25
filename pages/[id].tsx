import Head from "next/head";
import { IStory } from "@/typings";
import { HomeContainer } from "@/components/HomeContainer";
import { dehydrate, QueryClient, useQuery, useInfiniteQuery } from "react-query";
import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

interface Props {
  topStories: IStory[];
}

export default function IdPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isFetching } = useInfiniteQuery(
    "topStories",
    ({ pageParam = 0 }) => getTopStoryIds(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    }
  );

  console.log("what is the data? ", data);

  return (
    <>
      <Head>
        <title>Top 100 Hacker News</title>
        <meta name="description" content="Top 100 Hacker News articles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data?.pages && <HomeContainer topStories={data?.pages?.[Number(id ?? 0)]} />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const currentPage = Number(context?.params?.id ?? 0);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("topStories", () => getTopStoryIds(currentPage));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export async function getTopStoryIds(num: number) {
  const start = num * 20;
  const topStoryHash = await (
    await fetch(
      `https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy="$key"&startAt="${start}"&endAt="${
        start + 19
      }"`
    )
  ).json();

  const topStoryIds = makeIdArray(topStoryHash);

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

interface IIdHash {
  [id: string]: number;
}

function makeIdArray(objectHash: IIdHash) {
  const resultArray = [];
  for (let key in objectHash) resultArray.push(objectHash[key]);
  return resultArray;
}
