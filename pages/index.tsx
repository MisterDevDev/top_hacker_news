import { IStory } from "@/typings";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  topStories: IStory[];
}

export default function HomePage(props: Props) {
  const router = useRouter();

  useEffect(() => {
    router.push("/0");
  });

  return <></>;
}
