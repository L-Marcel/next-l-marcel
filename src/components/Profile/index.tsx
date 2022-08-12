import { formatDistance } from "date-fns";
import Image from "next/image";
import { useEffect } from "react";
import { Icon } from "../Icon";

export interface ProfileProps {
  updatedAt: string;
}

export function Profile({
  updatedAt
}: ProfileProps) {
  useEffect(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);
  
  return (
    <article className="mx-16 my-8 flex flex-row">
      <div className="flex h-[11.875rem] w-[11.875rem] rounded-full">
        <Image
          width={190}
          height={190}
          alt=""
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/62476762?v=4"
        />
      </div>
      <div className="flex flex-col p-8">
        <h1>l<span>-</span>marcel</h1>
        <p className="text-[1.5rem]">
          <span className="text-[1.5rem]">L</span>ucas <span className="text-[1.5rem]">Marcel</span> Silva de Brito
        </p>
        <div className="mt-4 flex flex-row items-center gap-2 text-gray-500 dark:text-white-600">
          <Icon name="clock" className="h-[1.7rem] w-[1.7rem]"/> 
          <time>
            last update: {formatDistance(new Date(updatedAt), new Date(), { addSuffix: true })}
          </time>
        </div>
      </div>
    </article>
  );
}